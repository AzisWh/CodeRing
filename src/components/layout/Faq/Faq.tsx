import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "1",
    question: "Apa itu program bootcamp ini?",
    answer:
      "Bootcamp ini adalah program intensif yang dirancang untuk membantu peserta memahami materi secara praktis dan terstruktur.",
  },
  {
    id: "2",
    question: "Apakah program ini cocok untuk pemula?",
    answer:
      "Ya, program ini dirancang untuk pemula maupun yang sudah memiliki dasar, dengan kurikulum bertahap.",
  },
  {
    id: "3",
    question: "Berapa lama durasi bootcamp?",
    answer:
      "Durasi bootcamp bervariasi tergantung program, biasanya berlangsung antara 4 hingga 12 minggu.",
  },
  {
    id: "4",
    question: "Apakah ada sertifikat setelah selesai?",
    answer:
      "Ya, peserta yang menyelesaikan program akan mendapatkan sertifikat resmi.",
  },
  {
    id: "5",
    question: "Bagaimana sistem pembelajarannya?",
    answer:
      "Pembelajaran dilakukan secara online maupun offline dengan kombinasi teori dan praktik langsung.",
  },
];

const Faq: React.FC = () => {
  return (
    <section
      className="py-20 px-4 sm:px-8 lg:px-16 bg-white"
      data-aos="fade-up"
    >
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">
          Pertanyaan yang Sering Ditanyakan
        </h2>
      </div>

      <div className="max-w-420 mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQ_DATA.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border rounded-lg px-6 py-4 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-semibold py-4">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-gray-600 text-base pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
