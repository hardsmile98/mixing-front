import React from 'react';
import styles from './styles.module.css';

const items = [
  {
    question: 'What is a bitcoin mixer?',
    answer: 'Mixer is a service that obfuscates your bitcoin transactions. It takes your bitcoins and sends you back the ones from the pool, which are premixed and not connected with you. Thus it breaks the link between the transactions before and after the mixing and makes it impossible to track the connection between the bitcoins that came into the mixer and went out.',
  },
  {
    question: 'How to use the mixer properly?',
    answer: ['Enter one or several destination bitcoin addresses for receiving of new bitcoins.',
      'Specify the delay time and split the amount among destination addresses if there are a few ones.',
      'Download the guarantee letter.',
      'The mixer gives you the address. Send your bitcoins there, but not less than the minimum'],
  },
  {
    question: 'What should I do if bitcoins never arrived?',
    answer: ['Check that your transaction to the mixer has three confirmations. If it does not, please wait. The mixing will start when the incoming transactions receives enough confirmations.',
      'Keep in mind the delay you set for the mixing. Bitcoins will be sent after this delay starting from the beginning of the mixing process. Delay is useful for incresasing the anonymity level.',
      'Check the mixer\'s website address in the browswer\'s address bar. Even one letter difference means you\'ve user a phishing website.',
      'Please turn to support, if this manual did not help'],
  },
  {
    question: 'I\'ve closed a browser\'s window, is my mixing cancelled now?',
    answer: 'Closing the window does not mean the mixing is cancelled. The mixing will be processed successfully if you did everything right. If you\'ve saved the window address, open it to see your mixing again.',
  },
];

function Faq() {
  return (
    <section id="faq">
      <div className={styles.head}>
        <h3>
          FAQ
        </h3>

        <p>
          Here you can find the answers on popular questions of the mixer
        </p>
      </div>

      <div className={styles.list}>
        {items.map((item) => (
          <div
            className={styles.item}
            key={item.question}
          >
            <h6>
              {item.question}
            </h6>

            {Array.isArray(item.answer) ? (
              <ul>
                {item.answer.map((a) => (
                  <li key={a}>
                    {a}
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
