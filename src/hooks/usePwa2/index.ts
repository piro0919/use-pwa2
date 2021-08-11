import { useMemo } from "react";
import usePwa from "use-pwa";

export type Pwa2Data = {
  enabledInstall: boolean;
  enabledUpdate: boolean;
  installPwa: () => void;
  isLoading: boolean;
  updatePwa: () => Promise<boolean | undefined>;
};

function usePwa2(): Pwa2Data {
  const {
    appinstalled,
    canInstallprompt,
    enabledPwa,
    enabledUpdate,
    isLoading,
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
  const isLoading2 = useMemo<Pwa2Data["isLoading"]>(
    () => isLoading,
    [isLoading]
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
    isLoading: isLoading2,
  };
}

export default usePwa2;
