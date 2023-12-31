import { useState } from 'react'
import '../styles/faq.css'
import Open from '../assets/close.svg';
import Close from '../assets/expand.svg';

const Faq = () => {
    const [openedIndex, setOpenedIndex] = useState(null);

    const openIndex = (index) => {
        setOpenedIndex(openedIndex === index ? null : index)
    }

    const data = [
        {
          question: "What is the Academy app about about?🧐",
          answer: "It is a learning app for learning in-demand skills.",
        },
        {
            question: "What is the Academy app about about?🧐",
            answer: "It is a learning app for learning in-demand skills.",
        },
        {
            question: "What is the Academy app about about?🧐",
            answer: "It is a learning app for learning in-demand skills.",
        },
        {
            question: "What is the Academy app about about?🧐",
            answer: "It is a learning app for learning in-demand skills.",
        },
    ]
    
    return (
        <div className="faq" id='faq'>
            <h1>Let's answer some of your burning questions</h1>
            <p className='sub-title'>Reach out to us now for any enquires, paternership or more</p>
            <div className="question-answers">
                
                {data.map((item, index) => (
                    <div onClick={() => openIndex(index)} className="question-answer" key={index}>
                        <div className="question-action">
                            <p className="question">{item.question}</p>
                            <span><img src={openedIndex === index ? Open : Close} alt="" /></span>
                        </div>
                        {openedIndex === index && (
                            <p className='answer'>{item.answer}</p>
                        )}
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Faq;