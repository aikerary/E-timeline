import { Chrono } from "react-chrono";
import { TimelineData } from "@/types/timeline";

interface TimelineProps {
  items: TimelineData;
  mode?: "VERTICAL" | "VERTICAL_ALTERNATING" | "HORIZONTAL";
}

const Timeline = ({ items, mode = "VERTICAL" }: TimelineProps) => {
  return (
    <div className="timeline-container w-full">
      <Chrono
        items={items}
        mode={mode}
        cardHeight={200}
        scrollable={{ scrollbar: true }}
        enableOutline
      />
    </div>
  );
};

export default Timeline;
