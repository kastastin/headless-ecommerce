"use client";

import { useState } from "react";
import { products } from "@wix/stores";

interface CustomProductsProps {
  productId: string;
  variants: products.Variant[];
  options: products.ProductOption[];
}

const CustomProducts = ({
  productId,
  variants,
  options,
}: CustomProductsProps) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;

      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value,
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {options.map((option) => (
        <div key={option.name} className="flex flex-col gap-4">
          <h4 className="font-medium">Choose {option.name}</h4>

          <ul className="flex items-center gap-3">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });

              const selected =
                selectedOptions[option.name!] === choice.description;

              const clickHandler = disabled
                ? undefined
                : () => handleOptionSelect(option.name!, choice.description!);

              return option.name === "Color" ? (
                <li
                  key={choice.description}
                  className="relative size-8 rounded-full ring-1 ring-gray-300"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2" />
                  )}

                  {disabled && (
                    <div className="absolute left-1/2 top-1/2 h-[2px] w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-red-400" />
                  )}
                </li>
              ) : (
                <li
                  key={choice.description}
                  className="rounded-md px-4 py-1 text-sm text-red-400 ring-1 ring-red-400"
                  style={{
                    backgroundColor: selected
                      ? "#f87171"
                      : disabled
                        ? "#fbcfe8"
                        : "#fff",
                    color: selected || disabled ? "#fff" : "#f87171",
                    cursor: disabled ? "not-allowed" : "pointer",
                    boxShadow: disabled ? "none" : "",
                  }}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CustomProducts;
