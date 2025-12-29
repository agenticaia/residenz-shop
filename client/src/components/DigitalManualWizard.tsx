import { useState } from "react";
import { useLocation } from "wouter";
import { WizardStep1Success } from "./wizard/WizardStep1Success";
import { WizardStep2Logistics } from "./wizard/WizardStep2Logistics";
import { WizardStep3Zones } from "./wizard/WizardStep3Zones";
import { WizardStep4Pets } from "./wizard/WizardStep4Pets";
import { WizardStep5Confirmation } from "./wizard/WizardStep5Confirmation";

interface DigitalManualWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DigitalManualWizard({ isOpen, onClose }: DigitalManualWizardProps) {
  const [step, setStep] = useState(1);
  const [, setLocation] = useLocation();

  // State for Logistics (Step 2)
  const [broomLocation, setBroomLocation] = useState<string | null>(null);
  const [broomPhoto, setBroomPhoto] = useState<string | null>(null);
  
  const [productsLocation, setProductsLocation] = useState<string | null>(null);
  const [productsPhoto, setProductsPhoto] = useState<string | null>(null);

  // State for Zones (Step 3)
  const [restrictedZones, setRestrictedZones] = useState<string[]>([]);
  const [newZone, setNewZone] = useState("");

  // State for Pets (Step 4)
  const [pets, setPets] = useState<{name: string, type: string}[]>([]);
  const [newPetName, setNewPetName] = useState("");
  const [newPetType, setNewPetType] = useState("Perro");

  if (!isOpen) return null;

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => Math.max(1, prev - 1));

  const addZone = () => {
    if (newZone.trim()) {
      setRestrictedZones([...restrictedZones, newZone.trim()]);
      setNewZone("");
    }
  };

  const removeZone = (index: number) => {
    setRestrictedZones(restrictedZones.filter((_, i) => i !== index));
  };

  const addPet = () => {
    if (newPetName.trim()) {
      setPets([...pets, { name: newPetName.trim(), type: newPetType }]);
      setNewPetName("");
    }
  };

  const removePet = (index: number) => {
    setPets(pets.filter((_, i) => i !== index));
  };

  const handleFinish = () => {
    // Save state to localStorage for persistence
    const manualData = {
      status: "active",
      logistics: {
        broomLocation: broomLocation || "No especificado",
        broomPhoto: broomPhoto,
        productsLocation: productsLocation || "No especificado",
        productsPhoto: productsPhoto
      },
      zones: restrictedZones,
      pets: pets,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem("residenz_digital_manual", JSON.stringify(manualData));
    
    onClose();
    setLocation("/mi-casa");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md h-[800px] max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative font-sans">
        
        {step === 1 && (
          <WizardStep1Success 
            nextStep={nextStep} 
            onClose={onClose} 
          />
        )}

        {step === 2 && (
          <WizardStep2Logistics
            broomLocation={broomLocation}
            setBroomLocation={setBroomLocation}
            broomPhoto={broomPhoto}
            setBroomPhoto={setBroomPhoto}
            productsLocation={productsLocation}
            setProductsLocation={setProductsLocation}
            productsPhoto={productsPhoto}
            setProductsPhoto={setProductsPhoto}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <WizardStep3Zones
            restrictedZones={restrictedZones}
            newZone={newZone}
            setNewZone={setNewZone}
            addZone={addZone}
            removeZone={removeZone}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 4 && (
          <WizardStep4Pets
            pets={pets}
            newPetName={newPetName}
            setNewPetName={setNewPetName}
            newPetType={newPetType}
            setNewPetType={setNewPetType}
            addPet={addPet}
            removePet={removePet}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 5 && (
          <WizardStep5Confirmation
            handleFinish={handleFinish}
          />
        )}

      </div>
    </div>
  );
}
