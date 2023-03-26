import { useState } from "preact/hooks";

export default function Greeting({ messages }: { messages: any }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div class="greetings absolute bottom-4 left-4 flex gap-5">
      <h3>{greeting}! Thank you for visiting!</h3>
      <button class=" bg-black" onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}
