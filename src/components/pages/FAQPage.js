import React from 'react';
import '../../../src/FAQPage.css';


const FAQPage = () => {
  const faqs = [
    {
      question: "What is the goal of your organization?",
      answer: "Our goal is to promote integration and inclusion of the population with developmental disabilities into mainstream society through various means such as education, therapy, capacity building, and policy support."
    },
    {
      question: "How do you work towards achieving integration and inclusion?",
      answer: "We work towards achieving integration and inclusion by designing and implementing low-cost effective models that support our vision. These models are social in nature, focusing on adaptability rather than a medical approach. We also aim to make disability intervention available at the grassroots level, targeting awareness, identification, intervention, and mainstreaming with effective methodologies."
    },
    {
      question: "What services do you provide?",
      answer: "We provide a range of services including education, therapy, capacity building, and policy support. Our services are designed to empower individuals with developmental disabilities and facilitate their integration into mainstream society."
    },
    {
      question: "How can I get involved with your organization?",
      answer: "There are several ways to get involved with our organization. You can volunteer your time and skills, make a donation to support our programs, participate in our awareness campaigns, or collaborate with us on projects and initiatives. Reach out to us to learn more about how you can contribute."
    },
    {
      question: "Do you offer support for families and caregivers of individuals with developmental disabilities?",
      answer: "Yes, we understand the challenges faced by families and caregivers of individuals with developmental disabilities. We provide support and resources to help them navigate through the journey, access services, and obtain the necessary guidance and information."
    },
    {
      question: "How can I access your services for someone with a developmental disability?",
      answer: "To access our services, you can reach out to our organization through our contact information provided on the website. We will guide you through the process and provide information on the services available and the steps to access them."
    },
    {
      question: "Are your services available nationwide?",
      answer: "Yes, our services aim to reach individuals and communities nationwide. We work towards creating a widespread impact and collaborate with governmental institutions to ensure sustainable and strategic change throughout the country."
    },
    {
      question: "How can I contribute to your organization's vision and mission?",
      answer: "You can contribute to our organization's vision and mission by supporting our programs and initiatives, spreading awareness about developmental disabilities, advocating for inclusive policies, and volunteering your time and skills. Together, we can make a difference and create a more inclusive society."
    }
  ];

  return (
    <div className="faq-page">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
