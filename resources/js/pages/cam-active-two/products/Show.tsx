import WhatWeDoCard from '../components/what-we-do-card';
import CamActiveLayout from '../layouts/CamActiveLayout';

const Show = () => {
    const post = {
        title: 'Educational Solutions',
        images: [{ image: 'sample-post.jpg' }],
        long_description: `
  <h2>Sample Content</h2>
  <p>
    Over the past decade, Cambodia has witnessed remarkable advancements in education technology, with digital solutions reshaping classrooms, empowering teachers, and increasing learning opportunities for students in both urban and rural areas. As digital infrastructure improves and mobile penetration rises, a new wave of initiatives is bridging the education gap across the country.
  </p>

  <h2>Why Digital Tools Matter</h2>
  <p>
    Digital learning platforms and applications have made it possible for educators to deliver interactive, accessible, and inclusive lessons to students who might otherwise lack access to quality resources. With over <strong>70% of Cambodians under the age of 35</strong>, investing in scalable, digital-first educational initiatives is critical for national development.
  </p>

  <blockquote>
    <p>"Education is the most powerful weapon which you can use to change the world." – Nelson Mandela</p>
  </blockquote>

  <h3>Key Benefits of Digital Learning</h3>
  <ul>
    <li>Expands access to educational materials and courses beyond physical classrooms.</li>
    <li>Supports remote and hybrid learning models, especially in rural provinces.</li>
    <li>Enables personalized learning paths and interactive multimedia content.</li>
    <li>Improves teacher training through online workshops and peer collaboration.</li>
  </ul>

  <h2>Case Study: Digital Learning in Kampong Cham</h2>
  <p>
    In 2023, a pilot program was launched in Kampong Cham province to introduce tablet-based learning in 15 primary schools. The project equipped classrooms with tablets preloaded with Khmer-language learning apps, digital storybooks, and educational games. Teachers received training on using digital tools to supplement traditional teaching methods.
  </p>

  <img src="/assets/images/posts/sample-case-study.jpg" alt="Tablet Learning in Kampong Cham" style="border-radius: 8px; margin: 20px 0;" />

  <p>
    Within six months, schools reported a <strong>40% increase in student engagement</strong> and a significant improvement in literacy and numeracy test scores. Teachers noted that students were more motivated and participated actively in class discussions.
  </p>

  <h2>The Road Ahead</h2>
  <p>
    While progress has been promising, challenges remain. Infrastructure limitations in remote areas, digital literacy among older educators, and the cost of devices continue to present barriers. Collaborative efforts between government agencies, NGOs, private sector partners, and local communities are essential to scaling these solutions equitably.
  </p>

  <h3>Next Steps</h3>
  <ul>
    <li>Expand digital literacy training for teachers nationwide.</li>
    <li>Develop localized, culturally relevant e-learning content in Khmer.</li>
    <li>Improve internet connectivity in underserved provinces.</li>
    <li>Foster public-private partnerships to support device affordability.</li>
  </ul>

  <p>
    By embracing technology thoughtfully and inclusively, Cambodia has the opportunity to leapfrog traditional barriers to education and equip its youth with the skills necessary for a modern, knowledge-based economy.
  </p>

  <h2>Conclusion</h2>
  <p>
    Digital transformation in Cambodian education is not just a trend — it’s a necessity. With strategic investment and community-driven innovation, the nation can build a more resilient, inclusive, and equitable education system for generations to come.
  </p>
`,
    };

    const services = [
        {
            id: 1,
            image: 'educations.png',
            title: 'Educational Solutions',
            description:
                'From curriculum development to digital learning tools, we help schools, NGOs, and government bodies deliver quality education that works.',
            long_description: `
What we offer:

•	Curriculum design and teacher training
•	Digital learning platforms and content
•	Programme monitoring and evaluation
•	Community-based educational initiatives

“We don’t just deliver content—we co-create learning experiences that stick.”
`,
        },
        {
            id: 2,
            image: 'logistics.png',
            title: 'Logistics Support',
            description:
                'We streamline supply chains for educational programs—getting the right materials to the right places, on time and on budget.',
            long_description: `
Our logistics services cover:

•	Procurement and supply chain management
•	Warehousing and inventory tracking
•	Last-mile delivery to schools and communities
•	Real-time reporting and logistics dashboards

“From textbooks to tablets, we move what matters.”
`,
        },
        {
            id: 3,
            image: 'partners.png',
            title: 'Partnership Building',
            description: 'We connect stakeholders across sectors to collaborate, innovate, and scale impact.',
            long_description: `
We help you:
•	Identify and engage with aligned partners
•	Design and manage joint initiatives
•	Facilitate workshops and knowledge-sharing events
•	Build networks that last

“We’re not just connectors—we’re collaborators.”
`,
        },
    ];

    return (
        <CamActiveLayout>
            <div className="mx-auto flex max-w-screen-xl flex-col items-start gap-12 px-6 py-6 lg:flex-row lg:py-8 xl:px-6">
                <div>
                    <h3 className="mb-8 text-2xl font-semibold lg:text-4xl">{post.title}</h3>
                    {/* <img
                        className="mb-4 h-full max-h-[600px] w-full rounded-xl object-cover"
                        src={`/assets/images/posts/${post.images[0].image}`}
                        alt=""
                    /> */}
                    <div className="flex h-auto w-full shrink-0 justify-center overflow-hidden rounded-lg md:justify-start">
                        <img src={`/assets/cam-active/posts/image2.jpg`} className="mb-2 size-full shrink-0 object-cover" alt="" />
                    </div>
                    <div className="prose ck-content max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: post.long_description }} />
                    </div>
                </div>

                <aside className="w-full shrink-0 lg:max-w-sm">
                    <h3 className="text-3xl font-bold tracking-tight">Products</h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
                        {services.map((item, i) => (
                            <WhatWeDoCard item={item} />
                        ))}
                    </div>
                </aside>
            </div>
        </CamActiveLayout>
    );
};

export default Show;
