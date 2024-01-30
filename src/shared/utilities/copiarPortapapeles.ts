export const handleCopiarPortaPapeles = async (valor: string) => {
  await navigator.clipboard.writeText(valor);
};
