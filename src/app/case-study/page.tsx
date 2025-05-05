import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-purple-dark">
      <Header />
      <main className="relative">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        <div className="container relative z-10 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-grotesk">
              Case Studies
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Discover how we've helped businesses transform their digital presence and achieve remarkable growth.
            </p>
          </div>

          {/* Case Study 1 */}
          <div className="bg-purple-dark/50 border border-purple-light/20 rounded-lg p-8 mb-12 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6 font-space-grotesk">
              Transforming a Streetwear Brand's E-Commerce Success
            </h2>
            
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-purple-accent mb-4">Client Overview</h3>
                <p className="text-white/80">
                  A fashion e-commerce brand in the streetwear market with a significant offline presence, generating approximately ₹1-2 crores monthly from physical stores.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-purple-accent mb-4">Challenge</h3>
                <p className="text-white/80">
                  The brand lacked a cohesive online identity and was struggling to replicate its offline success in the digital space.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-purple-accent mb-4">Strategy and Execution</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">1. Establishing a Brand Identity</h4>
                    <ul className="list-disc list-inside text-white/80 space-y-2">
                      <li>Developed a unique and compelling brand identity tailored to the target audience.</li>
                      <li>Crafted a consistent visual and content strategy to reflect this identity.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">2. Content Creation and Community Building</h4>
                    <ul className="list-disc list-inside text-white/80 space-y-2">
                      <li>Produced engaging content that resonated with the brand's vision and community interests.</li>
                      <li>Within the first 30 days, two pieces of content went viral, one reaching 2.5 million views and another 1.1 million views.</li>
                      <li>Grew the brand's online community from 4,000 to 16,000 followers in just 60 days.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">3. Paid Advertising Campaign</h4>
                    <ul className="list-disc list-inside text-white/80 space-y-2">
                      <li>Initiated targeted paid ads after establishing a strong content foundation.</li>
                      <li>Invested ₹90,000 in Meta ads over the next 20-35 days, resulting in ₹15.5 lakhs in revenue.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-purple-accent mb-4">Results</h3>
                <ul className="list-disc list-inside text-white/80 space-y-2">
                  <li>Achieved ₹0 to ₹14 lakhs in revenue within the first 60 days.</li>
                  <li>Increased monthly online revenue from ₹15-16 lakhs to ₹2.2 crores over the course of a year.</li>
                  <li>Expanded the social media following to 44,500 followers.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-purple-accent mb-4">Conclusion</h3>
                <p className="text-white/80">
                  Through a strategic approach focusing on brand identity, engaging content, and targeted advertising, the brand transformed its online presence, significantly boosting revenue and community growth.
                </p>
              </section>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-purple-dark/50 border border-purple-light/20 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6 font-space-grotesk">
              Scaling a Footwear Brand's Digital Success
            </h2>

            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-purple-accent mb-4">Background</h3>
                <p className="text-white/80">
                  Before partnering with us, the footwear brand was heavily reliant on organic traffic and was running very limited paid advertising. Their baseline monthly revenue hovered around ₹3.5–4 lakh per month. Their biggest issues were:
                </p>
                <ul className="list-disc list-inside text-white/80 mt-4 space-y-2">
                  <li>Lack of predictability in sales</li>
                  <li>Very little scaling in performance marketing</li>
                  <li>Heavy reliance on 1–2 organic channels (Instagram and word of mouth)</li>
                  <li>No proper performance advertising funnel built</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-purple-accent mb-4">What We Did</h3>
                <p className="text-white/80 mb-4">
                  We introduced a full-funnel paid acquisition system through Meta (Facebook/Instagram) ads.
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2">
                  <li>Building a fresh acquisition funnel focusing on new customer discovery</li>
                  <li>Creating mid-funnel retargeting to nurture the interest generated</li>
                  <li>Launching lower-funnel campaigns targeting high-intent audiences</li>
                  <li>Building better ad creatives focusing on emotional connection and product differentiation</li>
                  <li>Optimizing ad spending weekly based on CPA and ROAS goals</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-purple-accent mb-4">Results After 90 Days</h3>
                <ul className="list-disc list-inside text-white/80 space-y-2">
                  <li>Scaled revenue from ₹3.5–4 lakh per month to consistently ₹11–12 lakh per month</li>
                  <li>Reduced customer acquisition cost (CAC) by nearly 42% compared to their earlier attempts</li>
                  <li>Increased repeat customer rate by 28%, driven by remarketing and better brand engagement ads</li>
                  <li>Achieved an average of 4.5x ROAS across total ad spend</li>
                  <li>Built predictable sales pipelines (with ads accounting for about 72% of total revenue)</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-purple-accent mb-4">Key Takeaway</h3>
                <p className="text-white/80">
                  By introducing a full-funnel ad system, fixing messaging gaps, and improving brand visibility across paid channels, we were able to scale the brand profitably without sacrificing product quality or customer experience.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 