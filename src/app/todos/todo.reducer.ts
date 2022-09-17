import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';

import {
  borrar,
  crear,
  editar,
  toogle,
  toogleAll,
  eliminarCompletados,
} from './todo.actions';

export const initialState: Todo[] = [new Todo('prueba')];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toogle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(toogleAll, (state, { completado }) =>
    state.map((todo) => {
      return {
        ...todo,
        completado: completado,
      };
    })
  ),
  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      } else {
        return todo;
      }
    });
  }),
  on(borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(eliminarCompletados, (state) => state.filter((todo) => !todo.completado))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
