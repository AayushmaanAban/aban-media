import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// Debug environment variables (without exposing sensitive data)
console.log('Environment check:', {
  hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
  hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
  hasSpreadsheetId: !!process.env.GOOGLE_SHEET_ID,
  spreadsheetId: process.env.GOOGLE_SHEET_ID,
  clientEmail: process.env.GOOGLE_CLIENT_EMAIL
});

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

// Initialize Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log('Received form data:', formData);

    // Check if required fields are present
    if (!formData.name || !formData.email || !formData.phone) {
      return NextResponse.json(
        { success: false, message: "Name, email and phone are required" },
        { status: 400 }
      );
    }

    // Handle quiz form data
    if (formData.question1 && formData.question2 && formData.question3 && formData.question4 && formData.question5) {
      const quizData = {
        timestamp: new Date().toISOString(),
        question1: formData.question1,
        question2: formData.question2,
        question3: formData.question3,
        question4: formData.question4,
        question5: formData.question5,
      };

      try {
        // First, verify we can access the spreadsheet
        try {
          console.log('Attempting to access spreadsheet:', SPREADSHEET_ID);
          const spreadsheet = await sheets.spreadsheets.get({
            spreadsheetId: SPREADSHEET_ID,
          });
          console.log('Successfully accessed spreadsheet:', spreadsheet.data.properties?.title);
        } catch (error: any) {
          console.error('Error accessing spreadsheet:', {
            message: error.message,
            code: error.code,
            errors: error.errors,
            status: error.status
          });
          return NextResponse.json(
            { success: false, message: 'Error accessing Google Sheet' },
            { status: 500 }
          );
        }

        console.log('Attempting to append quiz data to sheet:', {
          spreadsheetId: SPREADSHEET_ID,
          data: quizData
        });

        // Prepare the data for Google Sheets
        const rowData = [
          new Date().toISOString(), // Timestamp
          formData.name, // Name
          formData.email, // Email
          formData.phone, // Phone
          quizData.question1 || '', // Question 1 response
          quizData.question2 || '', // Question 2 response
          quizData.question3 || '', // Question 3 response
          quizData.question4 || '', // Question 4 response
          quizData.question5 || '', // Question 5 response
        ];

        // Append the data to the Google Sheet
        const response = await sheets.spreadsheets.values.append({
          spreadsheetId: SPREADSHEET_ID,
          range: 'Sheet1!A:I',
          valueInputOption: 'RAW',
          requestBody: {
            values: [rowData],
          },
        });

        console.log('Google Sheets API Response:', response.data);
        return NextResponse.json({
          success: true,
          message: 'Form submitted successfully!'
        });
      } catch (error: any) {
        console.error('Detailed Google Sheets error:', {
          message: error.message,
          code: error.code,
          errors: error.errors,
          stack: error.stack,
          status: error.status
        });

        // Check for specific error types
        if (error.code === 403) {
          return NextResponse.json(
            { success: false, message: 'Permission denied accessing Google Sheet' },
            { status: 500 }
          );
        } else if (error.code === 404) {
          return NextResponse.json(
            { success: false, message: 'Google Sheet not found' },
            { status: 500 }
          );
        }

        return NextResponse.json(
          { success: false, message: 'Error saving quiz responses' },
          { status: 500 }
        );
      }
    }

    // Handle contact form data
    const { businessName, yearlyRevenue, message } = formData;

    if (!businessName || !yearlyRevenue) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const revenue = Number.parseFloat(yearlyRevenue.replace(/[₹,]/g, ''));
    const category = revenue >= 1500000 ? 'To Call' : 'Small Companies';

    const contactData = {
      name: formData.name,
      businessName,
      email: formData.email,
      phone: formData.phone,
      yearlyRevenue,
      message: message || '',
      category,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Sheet1!A:H',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[
            contactData.timestamp,
            contactData.name,
            contactData.businessName,
            contactData.email,
            contactData.phone,
            contactData.yearlyRevenue,
            contactData.message,
            contactData.category,
          ]],
        },
      });

      console.log('Google Sheets API Response:', response.data);
    } catch (error) {
      console.error('Error appending to Google Sheet:', error);
    }

    return NextResponse.json({
      success: true,
      category,
      message: `Thank you for your submission! ${category === 'To Call' ? 'Our team will contact you shortly.' : 'We have a special resource for you.'}`,
      ...(category === 'Small Companies' && {
        redirectUrl: '/resources/small-business-video'
      })
    });

  } catch (error: any) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Error processing form submission' },
      { status: 500 }
    );
  }
}
