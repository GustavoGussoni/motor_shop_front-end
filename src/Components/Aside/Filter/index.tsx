import { HtmlHTMLAttributes, useContext, useEffect, useState } from "react";
import { HeadingText } from "../../../Style/HeadingText";
import { InputNumber } from "./InputNumber";
import { AuthContext } from "../../../Contexts/AuthContext";
import { iGetAnnouncementFilter } from "../../../Contexts/AuthContext/@types";

const AsideFilter = ({ className }: any) => {
  const {
    filter,
    setFilter,
    renderAll,
    getAnnouncementsFiltered,
    allAnnouncements,
    setAllAnnouncements,
    getAllAnnouncement,
    setAnnouncementsFiltered,
    setRenderAll,
  } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getFilter = async () => {
      try {
        await getAnnouncementsFiltered();
        console.log(filter);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getFilter();
  }, []);

  const filterData: iGetAnnouncementFilter = {
    brand: [],
    model: [],
    color: [],
    year: [],
    fuel: [],
    kilometers: [],
    price: [],
  };

  const handleFilteredAnnouncements = (
    brand?: string | null,
    model?: string | null,
    color?: string | null,
    year?: string | null
  ) => {
    setRenderAll(false);

    if (brand) {
      const announcements = allAnnouncements.filter((el) => {
        return el.brand === brand;
      });

      filterData.brand = [brand];

      const findModels = announcements.map((el) => {
        return el.model;
      });
      const filterModels = findModels.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.model = filterModels;

      const findColor = announcements.map((el) => {
        return el.color;
      });
      const filterColor = findColor.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.color = filterColor;

      const findYear = announcements.map((el) => {
        return el.year.toString();
      });
      const filterYear = findYear.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.year = filterYear;

      const findFuel = announcements.map((el) => {
        return el.fuel.toString();
      });
      const filterFuel = findFuel.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.fuel = filterFuel;

      const findKm = announcements.map((el) => {
        return el.kilometers.toString();
      });
      const filterKm = findKm.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.kilometers = filterKm;

      const findPrice = announcements.map((el) => {
        return el.fuel.toString();
      });
      const filterPrice = findPrice.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.price = filterPrice;

      console.log(filterModels);
      setFilter(filterData);
      setAnnouncementsFiltered(announcements);
    }
    if (model) {
      const announcements = allAnnouncements.filter((el) => {
        return el.model === model;
      });

      filterData.model = [model];

      const findBrand = announcements.map((el) => {
        return el.brand;
      });
      const filterBrands = findBrand.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.brand = filterBrands;

      const findColor = announcements.map((el) => {
        return el.color;
      });
      const filterColor = findColor.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.color = filterColor;

      const findYear = announcements.map((el) => {
        return el.year.toString();
      });
      const filterYear = findYear.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.year = filterYear;

      const findFuel = announcements.map((el) => {
        return el.fuel.toString();
      });
      const filterFuel = findFuel.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.fuel = filterFuel;

      const findKm = announcements.map((el) => {
        return el.kilometers.toString();
      });
      const filterKm = findKm.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.kilometers = filterKm;

      const findPrice = announcements.map((el) => {
        return el.fuel.toString();
      });
      const filterPrice = findPrice.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.price = filterPrice;

      // console.log()filterModels;
      setFilter(filterData);
      setAnnouncementsFiltered(announcements);
    }
    if (color) {
      const announcements = allAnnouncements.filter((el) => {
        return el.color === color;
      });

      filterData.color = [color];

      const findBrand = announcements.map((el) => {
        return el.brand;
      });
      const filterBrands = findBrand.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.brand = filterBrands;

      const findModels = announcements.map((el) => {
        return el.model;
      });
      const filterModels = findModels.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.model = filterModels;

      const findYear = announcements.map((el) => {
        return el.year.toString();
      });
      const filterYear = findYear.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.year = filterYear;

      const findFuel = announcements.map((el) => {
        return el.fuel.toString();
      });
      const filterFuel = findFuel.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.fuel = filterFuel;

      const findKm = announcements.map((el) => {
        return el.kilometers.toString();
      });
      const filterKm = findKm.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.kilometers = filterKm;

      const findPrice = announcements.map((el) => {
        return el.fuel.toString();
      });
      const filterPrice = findPrice.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.price = filterPrice;

      // console.log()filterModels;
      setFilter(filterData);
      setAnnouncementsFiltered(announcements);
    }
    if (year) {
      const announcements = allAnnouncements.filter((el) => {
        return el.year === year;
      });

      filterData.year = [year];

      const findBrand = announcements.map((el) => {
        return el.brand;
      });
      const filterBrands = findBrand.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.brand = filterBrands;

      const findModels = announcements.map((el) => {
        return el.model;
      });
      const filterModels = findModels.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.model = filterModels;

      const findColor = announcements.map((el) => {
        return el.color;
      });
      const filterColor = findColor.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.color = filterColor;

      const findFuel = announcements.map((el) => {
        return el.fuel.toString();
      });
      const filterFuel = findFuel.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.fuel = filterFuel;

      const findKm = announcements.map((el) => {
        return el.kilometers.toString();
      });
      const filterKm = findKm.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.kilometers = filterKm;

      const findPrice = announcements.map((el) => {
        return el.fuel.toString();
      });
      const filterPrice = findPrice.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
      });
      filterData.price = filterPrice;

      console.log(filterModels);
      setFilter(filterData);
      setAnnouncementsFiltered(announcements);
    }
  };

  if (!isLoading && filter) {
    return (
      <section>
        <aside className={`flex flex-col gap-10 w-72 ${className}`}>
          {!renderAll ? (
            <div className="flex flex-col">
              <HeadingText
                tag="heading-6-500"
                className="text-black-fixed cursor-pointer"
                onClick={() => getAnnouncementsFiltered()}
              >
                Limpar filtros
              </HeadingText>
            </div>
          ) : null}
          <div className="flex flex-col">
            <HeadingText
              tag="heading-4-600"
              className="text-black-fixed cursor-pointer"
            >
              Marca
            </HeadingText>
            <div className="flex flex-col ml-2 mt-5">
              {filter.brand.map((el) => {
                return (
                  <HeadingText
                    tag="heading-6-500"
                    className="text-grey-3 cursor-pointer"
                    onClick={() =>
                      handleFilteredAnnouncements(el, null, null, null)
                    }
                  >
                    {el}
                  </HeadingText>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <HeadingText
              tag="heading-4-600"
              className="text-black-fixed cursor-pointer"
            >
              Modelo
            </HeadingText>
            <div className="flex flex-col ml-2 mt-5">
              {filter.model.map((el) => {
                return (
                  <HeadingText
                    tag="heading-6-500"
                    className="text-grey-3 cursor-pointer"
                    onClick={() =>
                      handleFilteredAnnouncements(null, el, null, null)
                    }
                  >
                    {el}
                  </HeadingText>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <HeadingText
              tag="heading-4-600"
              className="text-black-fixed cursor-pointer"
            >
              Cor
            </HeadingText>
            <div className="flex flex-col ml-2 mt-5">
              {filter.color.map((el) => {
                return (
                  <HeadingText
                    tag="heading-6-500"
                    className="text-grey-3 cursor-pointer"
                    onClick={() =>
                      handleFilteredAnnouncements(null, null, el, null)
                    }
                  >
                    {el}
                  </HeadingText>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <HeadingText
              tag="heading-4-600"
              className="text-black-fixed cursor-pointer"
            >
              Ano
            </HeadingText>
            <div className="flex flex-col ml-2 mt-5">
              {filter.year.map((el) => {
                return (
                  <HeadingText
                    tag="heading-6-500"
                    className="text-grey-3 cursor-pointer"
                    onClick={() =>
                      handleFilteredAnnouncements(null, null, null, el)
                    }
                  >
                    {el}
                  </HeadingText>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <HeadingText
              tag="heading-4-600"
              className="text-black-fixed cursor-pointer"
            >
              Combustível
            </HeadingText>
            <div className="flex flex-col ml-2 mt-5">
              {filter.fuel.map((el) => {
                return (
                  <HeadingText
                    tag="heading-6-500"
                    className="text-grey-3 cursor-pointer"
                    onClick={(event) =>
                      setFilter((event.target as HTMLElement).innerText)
                    }
                  >
                    {el}
                  </HeadingText>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <HeadingText
              tag="heading-4-600"
              className="text-black-fixed cursor-pointer"
            >
              Km
            </HeadingText>
            <div className="flex gap-10 mt-5">
              <InputNumber placeholder="Mínimo" />
              <InputNumber placeholder="Máximo" />
            </div>
          </div>
          <div className="flex flex-col">
            <HeadingText
              tag="heading-4-600"
              className="text-black-fixed cursor-pointer"
            >
              Preço
            </HeadingText>
            <div className="flex gap-10 mt-5">
              <InputNumber placeholder="Mínimo" />
              <InputNumber placeholder="Máximo" />
            </div>
          </div>
        </aside>
      </section>
    );
  }

  return (
    <section>
      <aside className={`flex flex-col gap-10 w-72 ${className}`}>
        <div className="flex flex-col">
          <HeadingText
            tag="heading-4-600"
            className="text-black-fixed cursor-pointer"
          >
            Marca
          </HeadingText>
          <div className="flex flex-col ml-2 mt-5">
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
            >
              Carregando
            </HeadingText>
          </div>
        </div>
        <div className="flex flex-col">
          <HeadingText
            tag="heading-4-600"
            className="text-black-fixed cursor-pointer"
          >
            Modelo
          </HeadingText>
          <div className="flex flex-col ml-2 mt-5">
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
            >
              Carregando
            </HeadingText>
          </div>
        </div>
        <div className="flex flex-col">
          <HeadingText
            tag="heading-4-600"
            className="text-black-fixed cursor-pointer"
          >
            Cor
          </HeadingText>
          <div className="flex flex-col ml-2 mt-5">
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
            >
              Carregando
            </HeadingText>
          </div>
        </div>
        <div className="flex flex-col">
          <HeadingText
            tag="heading-4-600"
            className="text-black-fixed cursor-pointer"
          >
            Ano
          </HeadingText>
          <div className="flex flex-col ml-2 mt-5">
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
            >
              Carregando
            </HeadingText>
          </div>
        </div>
        <div className="flex flex-col">
          <HeadingText
            tag="heading-4-600"
            className="text-black-fixed cursor-pointer"
          >
            Combustível
          </HeadingText>
          <div className="flex flex-col ml-2 mt-5">
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
            >
              Carregando
            </HeadingText>
          </div>
        </div>
        <div className="flex flex-col">
          <HeadingText
            tag="heading-4-600"
            className="text-black-fixed cursor-pointer"
          >
            Km
          </HeadingText>
          <div className="flex flex-col ml-2 mt-5">
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
            >
              Carregando
            </HeadingText>
          </div>
        </div>
        <div className="flex flex-col">
          <HeadingText
            tag="heading-4-600"
            className="text-black-fixed cursor-pointer"
          >
            Preço
          </HeadingText>
          <div className="flex flex-col ml-2 mt-5">
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
            >
              Carregando
            </HeadingText>
          </div>
        </div>
      </aside>
    </section>
  );
};

export { AsideFilter };
