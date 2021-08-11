import React, { useCallback } from "react";
import usePwa2 from "hooks/usePwa2";

function App() {
  const { enabledInstall, enabledUpdate, installPwa, updatePwa } = usePwa2();
  const handleUpdate = useCallback(async () => {
    const result = await updatePwa();

    // Update failure
    if (!result) {
      return;
    }

    window.location.reload();
  }, [updatePwa]);

  return (
    <div>
      <button disabled={!enabledInstall} onClick={installPwa}>
        Install PWA
      </button>
      <button disabled={!enabledUpdate} onClick={handleUpdate}>
        Update PWA
      </button>
    </div>
  );
}

export default App;
