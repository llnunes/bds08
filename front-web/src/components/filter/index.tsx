import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { makeRequest } from "../../request";
import { FilterData, Store } from "../../types";
import Select from "react-select";

import './styles.css';

type Props = {
  onSubmitFilter: (filter: FilterData) => void;
};

const Filter = ({ onSubmitFilter }: Props) => {
  const [selectStore, setSelectStore] = useState<Store[]>([]);

  const { handleSubmit, setValue, getValues, control } = useForm<FilterData>();

  const onSubmit = (formData: FilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeStore = (value: Store) => {
    setValue("store", value);

    const obj: FilterData = {
      store: getValues("store"),
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    makeRequest
      .get<Store[]>("/stores")
      .then((response) => {
        setSelectStore(response.data);
      })
      .catch(() => {
        console.error("Error to fetch stores");
      });
  }, []);

  return (
    <div className="filter-container base-card" >
      <form onSubmit={handleSubmit(onSubmit)} className="vendas-filter-form">
        <div className="vendas-filter-bottom-container">
          <div className="vendas-filter-store-container">
            <Controller
              name="store"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectStore}
                  isClearable
                  placeholder="Loja"
                  classNamePrefix="vendas-filter-select"
                  onChange={(value) => handleChangeStore(value as Store)}
                  getOptionLabel={(store: Store) => store.name}
                  getOptionValue={(store: Store) => String(store.id)}
                />
              )}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filter;
