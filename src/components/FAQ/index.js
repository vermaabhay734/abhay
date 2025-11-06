import React from 'react';
import styled from 'styled-components';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const FAQTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
`;

const StyledAccordion = styled(Accordion)`
  background-color: ${({ theme }) => theme.card} !important;
  color: ${({ theme }) => theme.text_primary} !important;
  margin-bottom: 1rem !important;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  font-size: 1.1rem;
  font-weight: 500;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  color: ${({ theme }) => theme.text_secondary};
`;

const faqData = [
  {
    question: "Who is Abhay Verma (vermaabhay734)?",
    answer: "I'm a Full-Stack Developer based in India, specializing in building high-performance web applications using React, Python, and the MERN stack. With a passion for clean code and user-centric design, I create solutions that are both efficient and accessible."
  },
  {
    question: "What tech does Abhay use?",
    answer: "My primary tech stack includes React.js for frontend development, Node.js/Express for backend services, MongoDB for databases, and Python for automation and data processing. I'm also experienced with modern development tools and practices like Git, CI/CD, and responsive design."
  },
  {
    question: "How to contact Abhay?",
    answer: "You can reach me through the contact form on my website, via email, or connect with me on GitHub (@vermaabhay734). I'm always open to discussing new projects, job opportunities, or tech collaboration."
  }
];

const FAQ = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(({ question, answer }) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
        }
      }))
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <FAQSection>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      {faqData.map((faq, index) => (
        <StyledAccordion key={index}>
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
            {faq.question}
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            {faq.answer}
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </FAQSection>
  );
};

export default FAQ;