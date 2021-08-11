import React from "react";
import usePwa2 from "hooks/usePwa2";

function App() {
  const { enabledInstall, enabledUpdate, installPwa, updatePwa } = usePwa2();

  return (
    <div>
      <button disabled={!enabledInstall} onClick={installPwa}>
        Install PWA
      </button>
      <button disabled={!enabledUpdate} onClick={updatePwa}>
        Update PWA
      </button>
    </div>
  );
}

export default App;
