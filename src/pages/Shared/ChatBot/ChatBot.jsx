// import React from 'react';

// const ChatBot = () => {
//     return (
//         <div>
//             o
//         </div>
//     );
// };

// export default ChatBot;
import React from 'react';
import ChatBot from 'react-simple-chatbot';

export default function App() {
  return (
    <>
      <ChatBot
        steps={[
          {
            id: 'hello-world', 
            message: 'Hello World!',
            end: true,
          },
        ]}
        floating={true}
      />
    </>
  );
}

