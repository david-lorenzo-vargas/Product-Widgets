"use client"

import {
  ReactElement,
  createContext,
  useCallback,
  useEffect,
  useState
} from "react";

import Header from "./Header";
import Widget from "../../Molecules/Widget";
import Spinner from "../../Atoms/Spinner";

import { fetchWidgets } from "@api/fetchWidgets";

import { WidgetSelectedColorEnum, Widget as WidgetType } from "@customTypes/types";

interface AppContextInterface {
  onSetLinked: (id: number) => void;
  onActivateBadge: (id: number) => void;
  onSelectColour: (id: number, colour: WidgetSelectedColorEnum) => void;
};

const defaultAppContext: AppContextInterface = {
  onSetLinked: (id: number) => {},
  onActivateBadge: (id: number) => {},
  onSelectColour: (id: number, colour: WidgetSelectedColorEnum) => {},
};

export const AppContext = createContext(defaultAppContext);

const ProductWidgets = (): ReactElement => {
  const [loading, setLoading] = useState<boolean>(true);
  const [widgets, setWidgets] = useState<WidgetType[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetchWidgets();

      setLoading(() => false);
      setWidgets(() => res);
    })();
  }, []);

  const onSetLinked = useCallback((id: number) => {
    setWidgets((w: WidgetType[]) => {
      return w.map((wid: WidgetType) => {
        if (wid.id === id) {
          return {...wid, linked: !wid.linked};
        }

        return wid;
      })
    });
  }, []);

  const onActivateBadge = useCallback((id: number) => {
    setWidgets((w: WidgetType[]) => {
      return w.map((wid: WidgetType) => {
        if (wid.id === id) {
          return {...wid, active: true};
        }

        return {...wid, active: false};
      })
    });
  }, []);

  const onSelectColour = useCallback((id: number, colour: WidgetSelectedColorEnum) => {
    setWidgets((w: WidgetType[]) => {
      return w.map((wid: WidgetType) => {
        if (wid.id === id) {
          return {...wid, selectedColor: colour};
        }

        return wid;
      })
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        onSetLinked,
        onActivateBadge,
        onSelectColour,
      }}
    >
      <div className="rounded-xl shadow-lg bg-white p-36 w-300 md:w-max">
        <Header />
        {loading ? (
          <div className="flex flex-row items-center justify-center w-full mt-20">
            <Spinner />
          </div>
        ) : (
          <div className="pt-20">
            {!!widgets.length ? (
              <div className="flex flex-row items-center justify-center md:-mx-28 flex-wrap">
                {widgets.map((w: WidgetType, ix: number) => (
                  <div className="md:px-28 mb-36 md:mb-0" key={w.id}>
                    <Widget
                      colour={w.selectedColor}
                      action={w.action}
                      type={w.type}
                      amount={w.amount}
                      id={w.id}
                      linked={w.linked}
                      active={w.active}
                      index={ix}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <span>There are no widgets</span>
              </div>
            )}
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
};

export default ProductWidgets;
