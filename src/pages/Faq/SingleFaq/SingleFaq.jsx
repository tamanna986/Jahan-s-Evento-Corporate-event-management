import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GrChatOption } from "react-icons/gr";

const SingleFaq = ({ faq }) => {
    return (
        <div className="space-y-4" >
            <h1 className="py-2 px-6 rounded-full w-[340px] md:w-[490px] bg-blue-400 font-semibold text-white mt-3 flex gap-2 items-center ">
                <AiOutlineQuestionCircle></AiOutlineQuestionCircle>{faq.faqs[0].question}
            </h1>
            <p className="px-6 py-8 rounded-lg border shadow-xl mb-3 w-[340px] md:w-[490px] flex gap-2  "> <GrChatOption></GrChatOption> {faq.faqs[0].answer}</p>
        </div>
    );
};

export default SingleFaq;