import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Extract form data
    const { name, businessName, email, phone, yearlyRevenue, message } = data;

    // Validate required fields
    if (!name || !businessName || !email || !phone || !yearlyRevenue) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Parse revenue (remove currency symbols and commas)
    const revenue = Number.parseFloat(yearlyRevenue.replace(/[₹,]/g, ''));

    // Determine category based on yearly revenue (15 Lakhs threshold)
    const category = revenue >= 1500000 ? 'To Call' : 'Small Companies';

    // In a real application, you would:
    // 1. Store this information in a database
    // 2. Send notification emails
    // 3. Connect to CRM systems

    console.log('Submission received:', {
      name,
      businessName,
      email,
      phone,
      yearlyRevenue,
      message,
      category
    });

    // Return appropriate response based on category
    return NextResponse.json({
      success: true,
      category,
      message: `Thank you for your submission! ${category === 'To Call' ? 'Our team will contact you shortly.' : 'We have a special resource for you.'}`,
      // For small companies, include a video URL
      ...(category === 'Small Companies' && {
        redirectUrl: '/resources/small-business-video'
      })
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
