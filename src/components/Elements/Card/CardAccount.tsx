import React, { useContext, useState } from 'react';
import { accountDatas } from '@/datas/AccountDatas';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { ThemeContext } from '@/context/ThemeContext';

export const CardAccount: React.FC = () => {
  const theme: any = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = accountDatas.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const totalBalance = accountDatas.reduce((sum, account) => sum + account.balance, 0);

  const { theme: themeMode } = useContext(ThemeContext)

  return (
    <>
      <div className="flex justify-between items-center py-3 border-b border-[#F3F3F3]">
        <h2 className="text-xl font-extrabold">${totalBalance.toLocaleString('en-US')}</h2>
        <p className="text-base text-webstyle-grey-200">All Accounts</p>
      </div>

      {/* Display active account data */}
      <div className="bg-webstyle-primary rounded-md p-4 flex justify-between items-center mt-3">
        <div className="flex flex-col">
          <h5 className="text-webstyle-addon-white75 text-base">Account type</h5>
          <h3 className="text-white text-2xl font-bold">
            {accountDatas[activeStep].accountType}
          </h3>
          <p className="text-webstyle-addon-white75 text-base">
            {accountDatas[activeStep].maskedNumber}
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-end items-end">
          <img
            src={accountDatas[activeStep].icon}
            alt={accountDatas[activeStep].accountType}
            loading="lazy"
            className="w-20"
          />
          <div className="flex gap-3">
            <h4 className="text-white text-3xl font-semibold">
              ${accountDatas[activeStep].balance}
            </h4>
            <img src={accountDatas[activeStep].arrowIcon} alt="arrow" />
          </div>
        </div>
      </div>

      {/* Stepper */}
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
            flexGrow: 1,
            margin: '16px auto',
            display: 'flex',
            justifyContent: 'space-between', 
            "& .MuiMobileStepper-dotActive": {backgroundColor: themeMode.color}
          }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={{color: themeMode.color}}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{color: themeMode.color}}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Previous
          </Button>
        }
      />
    </>
  );
};
