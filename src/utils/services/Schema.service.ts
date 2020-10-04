import { db } from "../../firebase";
import { collectionData } from "rxfire/firestore";
import find from "lodash/find";
import { map } from "rxjs/operators";
import { Detail } from "../../screens/home/Home.interface";

const flSchema = collectionData(db.collection("fl_schemas"));

export const schemaDataForScreens = (id: string) => {
  return flSchema.pipe(
    map((data) => {
      return find(data as Detail[], (schema: Detail) => schema.id === id);
    })
  );
};
