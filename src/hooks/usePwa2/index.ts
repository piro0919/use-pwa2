import { useMemo } from "react";
import usePwa from "use-pwa";

export type Pwa2Data = {
  enabledInstall: boolean;
  enabledUpdate: boolean;
  installPwa: () => void;
  updatePwa: () => Promise<boolean | undefined>;
};

function usePwa2(): Pwa2Data {
  const {
    appinstalled,
    canInstallprompt,
    enabledPwa,
    enabledUpdate,
    isPwa,
    showInstallPrompt,
    unregister,
  } = usePwa();
  const enabledInstall = useMemo<Pwa2Data["enabledInstall"]>(
    () => !appinstalled && canInstallprompt && enabledPwa && !isPwa,
    [appinstalled, canInstallprompt, enabledPwa, isPwa]
  );
  const enabledUpdate2 = useMemo<Pwa2Data["enabledUpdate"]>(
    () => enabledUpdate && isPwa,
    [enabledUpdate, isPwa]
  );
  const installPwa = useMemo<Pwa2Data["installPwa"]>(
    () => showInstallPrompt,
    [showInstallPrompt]
  );
  const updatePwa = useMemo<Pwa2Data["updatePwa"]>(
    () => unregister,
    [unregister]
  );

  return {
    enabledInstall,
    installPwa,
    updatePwa,
    enabledUpdate: enabledUpdate2,
  };
}

export default usePwa2;
