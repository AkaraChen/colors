import { defineComponent } from "vue";
import { notice } from "@akrc/ringo";
import "@akrc/ringo/style/notice/default.css";

export default defineComponent({
  props: ["color", "index", "name"],
  setup: (props) => {
    return () => (
      <div
        style={{
          backgroundColor: props.color,
          padding: "12px",
          color: props.index < 6 ? "black" : "white",
          fontSize: "14px",
          display: "flex",
          justifyContent: "space-between",
        }}
        class="color"
        onClick={() => {
          navigator.clipboard.writeText(props.color);
          notice({ text: "Copy success", type: "success" });
        }}
      >
        <span>{props.name}</span>
        <span style={{ fontFamily: "monospace" }}>{props.color}</span>
      </div>
    );
  },
});
