import React from "react";

const sizeClasses = {
  txtMontserratRomanMedium28: "font-medium font-montserrat",
  txtMontserratRomanBold20Black900: "font-bold font-montserrat",
  txtMontserratRomanBold28: "font-bold font-montserrat",
  txtMontserratRomanBold37: "font-bold font-montserrat",
  txtMontserratRomanSemiBold20: "font-montserrat font-semibold",
  txtMontserratRomanRegular20Black900: "font-montserrat font-normal",
  txtMontserratRomanRegular20: "font-montserrat font-normal",
  txtMontserratRomanMedium22: "font-medium font-montserrat",
  txtMontserratRomanBold30: "font-bold font-montserrat",
  txtMontserratRomanBold20: "font-bold font-montserrat",
  txtMontserratRomanBold50: "font-bold font-montserrat",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
