import React, { useContext, useState } from "react";
import DataTable from "../Common/DataTable";
import Header from "../Common/Header";
import { Button, Modal } from "flowbite-react";
import { IconAlertTriangle } from "@tabler/icons-react";
import Update from "./Update";
import Add from "./Add";
import { HomeContext, ProductContext } from "../../context/ContextState";

export const CustomeButton = ({ onClick }) => {
  return (
    <button
      className="text-white bg-dark text-light text-center  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-3  focus:outline-none "
      onClick={onClick}
    >
      Add Product
    </button>
  );
};

const Product = () => {
  const { productData } = useContext(HomeContext);
  const { handleDelete, setId, setFormData } = useContext(ProductContext);

  const [opration, setOpration] = useState("view");
  const [openModal, setOpenModal] = useState(false);

  const cols = [
    {
      header: "Product",
      accessor: "title",
      type: "object",
    },
    {
      header: "Product ID",
      accessor: "product_id",
    },
    {
      header: "QTY",
      accessor: "qty",
    },
    {
      header: "Price",
      accessor: "price",
    },
  ];

  const OnDelete = (id) => {
    setId(id);
    setOpenModal(true);
  };

  const HideModal = () => {
    setId();
    setOpenModal(false);
  };

  const OnAdd = () => {
    setOpration("add");
  };
  const OnEdit = (data) => {
    setOpration("update");
    setFormData(data);
  };

  if (opration === "view") {
    return (
      <>
        <Header
          title={"Products"}
          CustomeHeader={<CustomeButton onClick={OnAdd} />}
        />

        <div className="mx-5 xl:ch-85 ch-80 overflow-auto border shadow-xl rounded-xl">
          <DataTable
            cols={cols}
            data={productData}
            OnDelete={OnDelete}
            OnEdit={OnEdit}
          />
        </div>

        {/* Delete Modal */}
        <Modal
          show={openModal}
          size="lg"
          onClose={HideModal}
          popup
          position={"center"}
        >
          {/* <Modal.Header /> */}
          <Modal.Body className="p-8">
            <div className="text-center">
              <div className="flex justify-center">
                <IconAlertTriangle
                  height={80}
                  width={80}
                  className="text-orange-500 mb-3"
                />
              </div>
              <h3 className="font-semibold mb-3 text-2xl">
                Delete This Product ?
              </h3>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure, you want to delete this product?
              </h3>
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  className="bg-primary px-10"
                  id="deleteBtn"
                  onClick={() => {
                    HideModal();
                    handleDelete();
                  }}
                >
                  Yes
                </Button>
                <Button
                  className="bg-dark text-light px-10"
                  color="gray"
                  onClick={HideModal}
                >
                  No
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  } else if (opration === "update") {
    return <Update setOpration={setOpration} />;
  } else {
    return <Add setOpration={setOpration} />;
  }
};

export default Product;
