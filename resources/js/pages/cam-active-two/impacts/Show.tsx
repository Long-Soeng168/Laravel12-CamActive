import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import CamActiveLayout from '../layouts/CamActiveLayout';

const Show = () => {
    const post = {
        title: 'How Digital Solutions Are Transforming Cambodian Education',
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

    const caseStudies = [
        {
            id: 1,
            image: 'digital-learning.png',
            title: 'Digital Learning in Rural Schools',
            short_description:
                'In partnership with local educators, we introduced tablet-based learning in remote areas, improving student engagement and test scores by over 40%.',
            long_description: `
      <p>Access to quality education remains a challenge in remote regions. In response, we partnered with local schools to pilot a <strong>tablet-based learning initiative</strong>. Over the course of six months, students were provided with digital learning resources tailored to their curriculum.</p>
      <p>Key outcomes included:</p>
      <ul>
        <li>Student engagement increased by <strong>over 40%</strong>.</li>
        <li>Teachers reported a <strong>30% improvement in lesson efficiency</strong>.</li>
        <li>The initiative fostered collaboration between educators and parents, strengthening community involvement in education.</li>
      </ul>
      <p>Following its success, the program is now being scaled to neighboring districts, with ongoing training for teachers and regular content updates.</p>
    `,
        },
        {
            id: 2,
            image: 'supply-chain.png',
            title: 'Efficient Supply Chains for NGOs',
            short_description: 'We helped streamline logistics for a major NGO, reducing delivery times by 60% and cutting costs by 25%.',
            long_description: `
      <p>Many NGOs struggle with complex logistics, leading to delays in aid delivery and increased operational costs. We collaborated with a prominent NGO to <strong>optimize their supply chain processes</strong>.</p>
      <p>The project involved:</p>
      <ul>
        <li>Analyzing existing workflows and identifying bottlenecks.</li>
        <li>Introducing a centralized digital inventory and order management system.</li>
        <li>Partnering with reliable local suppliers and transport services.</li>
      </ul>
      <p>As a result, delivery times were cut by <strong>60%</strong>, operational expenses decreased by <strong>25%</strong>, and the NGO reported improved service reliability. The digital system also provided real-time insights into inventory levels, reducing waste and overstocking.</p>
    `,
        },
        {
            id: 3,
            image: 'people.png',
            title: 'Building Bridges Between Sectors',
            short_description:
                'Our partnership-building workshops brought together educators, government officials, and suppliers to co-design scalable education programs.',
            long_description: `
      <p>To address systemic challenges in the education sector, we hosted a series of <strong>multi-stakeholder workshops</strong> aimed at fostering collaboration between diverse groups including government agencies, schools, NGOs, and private suppliers.</p>
      <p>Highlights of the initiative:</p>
      <ul>
        <li>Facilitated open dialogue to identify shared challenges and opportunities.</li>
        <li>Co-developed scalable solutions, including a joint education program framework.</li>
        <li>Established ongoing partnerships for resource sharing and joint initiatives.</li>
      </ul>
      <p>This initiative not only <strong>improved cross-sector communication</strong> but also led to the creation of a regional education alliance, which continues to work on improving educational access and quality in underserved areas.</p>
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
                    <h3 className="text-3xl font-bold tracking-tight">Stories from the Field</h3>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
                        {caseStudies.map((item) => (
                            <Link href={`/impact/1`}>
                                <Card
                                    key={item.id}
                                    className="bg-primary/10 mt-4 flex cursor-pointer flex-row gap-0 overflow-hidden rounded-xl border border-none border-gray-200 text-start shadow-none transition-all duration-300 hover:scale-105 sm:flex-row"
                                >
                                    <CardHeader>
                                        <div className="aspect-square size-20 rounded-lg">
                                            <img
                                                src={`/assets/cam-active/stories-from-the-field/${item.image}`}
                                                className="size-20 shrink-0 object-contain"
                                                alt=""
                                            />
                                        </div>
                                    </CardHeader>

                                    <CardContent className="flex flex-col justify-center p-0 pr-4">
                                        <h3 className="text-foreground line-clamp-2 text-lg leading-snug font-semibold tracking-tight lg:text-xl">
                                            {item.title}
                                        </h3>
                                        <p className="text-foreground mt-2 line-clamp-3 text-xs lg:text-sm">{item.short_description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </CamActiveLayout>
    );
};

export default Show;
