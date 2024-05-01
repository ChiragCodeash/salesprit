import React, { useContext, useEffect, useState } from "react";
import Header from "../Common/Header";
import { ProductContext } from "../../context/ContextState";

const Add = ({ setOpration }) => {
  const inputClasses = `bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-3.5 placeholder:font-semibold placeholder:text-gray-500 `;
  const labelClasses = `block mb-2 text-sm font-semibold text-gray-900 dark:text-white`;
  const { formData, setFormData, handleAdd } = useContext(ProductContext);

  const [productImg, setProductImg] = useState();
  const [isValidate, setValidate] = useState(false);

  useEffect(() => {
    for (const [key, value] of Object.entries(formData)) {
      if (key !== "img") {
        if (!value) {
          setValidate(true);
          break;
        } else {
          setValidate(false);
        }
      }
    }
    if(!productImg){
      setValidate(true);
    }
  }, [formData , productImg]);

  const HandleChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setProductImg(undefined);
      return;
    }
    setProductImg(URL.createObjectURL(e.target.files[0]));
  };
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const OnSubmit = () => {
    setOpration("view");
    handleAdd({ ...formData, img: productImg });
  };

  const OnBack = () => {
    setOpration("view");
    setFormData({
      title: "",
      qty: "",
      img: "",
      price: "",
      product_id: "",
    });
  };
  return (
    <>
      <Header title={"Add Product"} />
      <div className="mx-5 shadow-xl rounded-lg border-2">
        <div className=" p-5 px-10 flex justify-between cursor-pointer">
          <h3 className="font-semibold  text-primary" onClick={OnBack}>
            Back
          </h3>
        </div>

        <div className="p-5 flex justify-center">
          <div className="flex items-center justify-center lg:w-1/4 w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              {productImg ? (
                <img src={productImg} className="h-100 w-100 p-2" />
              ) : (
                <>
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                </>
              )}
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={HandleChange}
              />
            </label>
          </div>
        </div>

        <div className="p-5">
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label htmlFor="title" className={labelClasses}>
                Product Name :
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                className={inputClasses}
                placeholder="Product Name"
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label htmlFor="qty" className={labelClasses}>
                Product Unit :
              </label>
              <input
                type="number"
                id="qty"
                name="qty"
                value={formData.qty}
                className={inputClasses}
                placeholder="Product Unit"
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label htmlFor="Category" className={labelClasses}>
                Category
              </label>
              <select
                id="Category"
                name="category"
                onChange={handleFormChange}
                className={inputClasses}
              >
                <option defaultValue={""}>Select</option>
                <option value="fat">Fat</option>
                <option value="protein">Protein</option>
                <option value="dairy">Dairy</option>
                <option value="starchy">Starchy food</option>
              </select>
            </div>
            <div>
              <label htmlFor="phone" className={labelClasses}>
                SKU :
              </label>
              <input
                type="text"
                id="phone"
                name="sku"
                className={inputClasses}
                onChange={handleFormChange}
                placeholder="Product SKU"
              />
            </div>
            <div>
              <label htmlFor="price" className={labelClasses}>
                Price :
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                className={inputClasses}
                placeholder="$10.00"
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label htmlFor="product_id" className={labelClasses}>
                Product ID :
              </label>
              <input
                type="text"
                id="product_id"
                name="product_id"
                value={formData.product_id}
                className={inputClasses}
                placeholder="123456789"
                onChange={handleFormChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center p-10">
          <button
            className="text-white bg-dark text-light text-center disabled:bg-gray-300 disabled:cursor-not-allowed focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-14  py-3.5 me-2 mb-2  focus:outline-none "
            onClick={OnSubmit}
            disabled={isValidate}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Add;
