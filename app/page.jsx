import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export default function TaskBottleApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [completedCount, setCompletedCount] = useState(0);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    if (!newTasks[index].done) setCompletedCount(completedCount + 1);
    else setCompletedCount(completedCount - 1);
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const progressPercent = tasks.length
    ? (completedCount / tasks.length) * 100
    : 0;

  const choleArray = Array.from({ length: completedCount });

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-center">
        Chole Bottle Tracker
      </h1>

      <div className="flex gap-2">
        <Input
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <Card>
        <CardContent className="space-y-2 py-4">
          {tasks.map((task, idx) => (
            <div
              key={idx}
              onClick={() => toggleTask(idx)}
              className={`cursor-pointer px-3 py-1 rounded-md ${
                task.done
                  ? "bg-green-100 line-through"
                  : "bg-gray-100"
              }`}
            >
              {task.text}
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="text-center font-medium">
        Progress: {completedCount} / {tasks.length}
      </div>

      <Progress value={progressPercent} />

      <div className="relative h-64 w-32 mx-auto mt-4">
        <div
          className="absolute inset-0 border-4 border-blue-300 rounded-b-full bg-white/80"
          style={{
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
          }}
        />

        {choleArray.map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 w-4 h-4 bg-yellow-700 rounded-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: Math.random() * 220 + 10,
              opacity: 1,
            }}
            transition={{ delay: i * 0.1 }}
            style={{ transform: "translateX(-50%)" }}
          />
        ))}
      </div>

      <div className="text-center text-sm italic text-gray-600">
        {completedCount === tasks.length && tasks.length > 0
          ? "Bottle bhar gaya! Tu toh legend nikla 🏆"
          : completedCount > 0
          ? "Aur chole daal! Tu kar sakta hai 💪"
          : "Start kar yaar, chole akelay udasi mein hain!"}
      </div>
    </div>
  );
}
