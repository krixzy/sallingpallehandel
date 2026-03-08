const MoreInfomation = (butId, divId, text) => {
  const button = GetEl(butId);
  const div = GetEl(divId);
  if (div.children[2].textContent == text) {
    div.children[2].remove();
    button.textContent = "Læs mere";
  } else {
    div.removeChild(button);
    const pText = CreatePInfo(text);
    div.appendChild(pText);
    div.appendChild(button);
    button.textContent = "Læs mindre";
  }
};
const GetEl = (id) => {
  return document.getElementById(id);
};

const CreatePInfo = (text) => {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
};
const euroPalletInfo = `En euro palle måler 1200 mm i længden, 800 mm i bredden. Den er konstrueret til at kunne bære en belastning på op til 1500 kg. Kan fåes både som nye og brugte. 
`;
const onePalletInfo = `Engangspaller er ofte lettere og mindre holdbare end genanvendelige paller. Engangspaller kan fåes med målene 1200mm i længden og 800 mm i bredden, målene 800mm i længden og 600 mm i bredden eller målene 400mm i længden og 600 mm i bredden.`;

const quartPalletInfo = `Dimensionerne af en kvartpalle har længde på  600 mm, en bredde på  400 mm og en højde på  144 mm. Den kan normalt bære en belastning på op til 250 kg.`;

const bPalletInfo =
  "B-paller måler typisk 1200 mm i længden og 800 mm i bredden. En B-palle er en brugt palle, der har en bæreevne, der ligner en europalle. Dog kan B-paller have visse skavanker, såsom mindre skader på brædderne eller lignende.";

const dsHalfPalletInfo =
  "DS-halvpaller måler  800 mm i længden og 600 mm i bredden. En DS-halvpalle er genanvendelig og betydeligt mere robust end en almindelig halvpalle.";

const halfPalletInfo =
  "Halvpaller måler typisk 800 mm i længden og 600 mm i bredden. En halvpalle er mindre robust end en DS-halvpalle og bliver ofte brugt som en engangspalle.";

GetEl("moreInfoEuroPalletButton").addEventListener("click", () => {
  MoreInfomation(
    "moreInfoEuroPalletButton",
    "moreInfoEuroPalletDiv",
    euroPalletInfo
  );
});
GetEl("moreInfoQuartPalletsButton").addEventListener("click", () => {
  MoreInfomation(
    "moreInfoQuartPalletsButton",
    "moreInfoQuartPalletsDiv",
    quartPalletInfo
  );
});

GetEl("moreInfoOnePalletButton").addEventListener("click", () => {
  MoreInfomation(
    "moreInfoOnePalletButton",
    "moreInfoOnePalletDiv",
    onePalletInfo
  );
});
GetEl("moreInfoB-palletButton").addEventListener("click", () => {
  MoreInfomation("moreInfoB-palletButton", "moreInfoB-palletDiv", bPalletInfo);
});
GetEl("moreInfoHalfpalletButton").addEventListener("click", () => {
  MoreInfomation(
    "moreInfoHalfpalletButton",
    "moreInfoHalfpalletDiv",
    halfPalletInfo
  );
});
GetEl("moreInfoDs-halfpalletButton").addEventListener("click", () => {
  MoreInfomation(
    "moreInfoDs-halfpalletButton",
    "moreInfoDs-halfpalletDiv",
    dsHalfPalletInfo
  );
});
