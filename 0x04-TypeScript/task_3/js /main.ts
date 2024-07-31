
import { RowID, RowElement } from './interface';
import CRUD from './crud';

const row: RowElement = {
  firstName: 'Guilume',
  lastName: 'Salvia',
}

const newRowID: RowID = CRUD.insertRow(row);
row.age = 26;
const updatedRow: RowElement = row;

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
