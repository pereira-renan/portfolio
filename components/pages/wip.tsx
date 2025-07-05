import FallingText from "../ui/falling-text";

const Wip = () => {
  return (
    <div className="h-full w-full">
      <FallingText
        text="This page is under construction"
        highlightWords={["under", "construction"]}
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />
    </div>
  );
};

export default Wip;
