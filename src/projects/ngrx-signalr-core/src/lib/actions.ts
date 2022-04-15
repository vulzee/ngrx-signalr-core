import { IHttpConnectionOptions } from "@microsoft/signalr";
import { createAction, props, union } from "@ngrx/store";

/**
 * Action to dispatch in order to create a new SignalR hub.
 */
export const createSignalRHub = createAction(
  "@ngrx/signalr/createHub",
  props<{
    hubName: string;
    url: string;
    options?: IHttpConnectionOptions | undefined;
  }>()
);

/**
 * Action dispatched when a hub is at `unstarted` state.
 */
export const signalrHubUnstarted = createAction(
  "@ngrx/signalr/hubUnstarted",
  props<{ hubName: string; url: string }>()
);

/**
 * Action to dispatch in order to start a SignalR hub.
 */
export const startSignalRHub = createAction(
  "@ngrx/signalr/startHub",
  props<{ hubName: string; url: string }>()
);

/**
 * Action to dispatch in order to stop a SignalR hub.
 */
export const stopSignalRHub = createAction(
  "@ngrx/signalr/stopHub",
  props<{ hubName: string; url: string }>()
);

/**
 * Action to dispatch in order to reconnect to a SignalR hub.
 * It can be automatically dispatched using `createReconnectEffect` effect.
 */
export const reconnectSignalRHub = createAction(
  "@ngrx/signalr/reconnectHub",
  props<{ hubName: string; url: string }>()
);

/**
 * Action dispatched when a SignalR failed to start.
 */
export const signalrHubFailedToStart = createAction(
  "@ngrx/signalr/hubFailedToStart",
  props<{ hubName: string; url: string; error: any }>()
);

/**
 * Action dispatched when a hub is at `connected` state.
 */
export const signalrConnected = createAction(
  "@ngrx/signalr/connected",
  props<{ hubName: string; url: string }>()
);

/**
 * Action dispatched when a hub is at `disconnected` state.
 */
export const signalrDisconnected = createAction(
  "@ngrx/signalr/disconnected",
  props<{ hubName: string; url: string }>()
);

/**
 * Action dispatched when an error occured with a SignalR hub.
 */
export const signalrError = createAction(
  "@ngrx/signalr/error",
  props<{ hubName: string; url: string; error: any }>()
);

/**
 * Action dispatched when a SignalR cannot be found, when doing any action.
 */
export const hubNotFound = createAction(
  "@ngrx/signalr/hubNotFound",
  props<{ hubName: string; url: string }>()
);

const signalRAction = union({
  createSignalRHub,
  signalrHubUnstarted,
  startSignalRHub,
  stopSignalRHub,
  reconnectSignalRHub,
  signalrHubFailedToStart,
  signalrConnected,
  signalrDisconnected,
  signalrError,
  hubNotFound,
});
/**
 * Union of all possible actions to use on the ngrx-signalr-core package.
 */
export type SignalRAction = typeof signalRAction;
