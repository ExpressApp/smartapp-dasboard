import { createAction } from 'redux-actions';
import { ChatState, ContactState, DashboardItems, ServiceState } from '../../types/reducers';

export const INIT_APP = 'INIT_APP';
export const FETCH_DASHBOARD_ITEMS = 'FETCH_DASHBOARD_ITEMS';
export const SET_DASHBOARD_ITEMS = 'SET_DASHBOARD_ITEMS';
export const SEARCH_FOR_NEW_DASHBOARD_ITEMS = 'SEARCH_FOR_NEW_DASHBOARD_ITEMS';
export const SET_FOUND_ITEMS_FOR_DASHBOARD = 'SET_FOUND_ITEMS_FOR_DASHBOARD';
export const ADD_ITEM_TO_DASHBOARD = 'ADD_ITEM_TO_DASHBOARD';
export const UPDATE_ITEMS_ON_DASHBOARD = 'UPDATE_ITEMS_ON_DASHBOARD';
export const REMOVE_ITEM_FROM_DASHBOARD = 'REMOVE_ITEM_FROM_DASHBOARD';
export const CHANGE_DASHBOARD_ITEMS_ORDER = 'CHANGE_DASHBOARD_ITEMS_ORDER';
export const OPEN_SMART_APP = 'OPEN_SMART_APP';
export const OPEN_GROUP_CHAT = 'OPEN_GROUP_CHAT';
export const OPEN_CONTACT_CARD = 'OPEN_CONTACT_CARD';

export const initApp = createAction(INIT_APP);
export const setDashboardItems = createAction(
  SET_DASHBOARD_ITEMS,
  ({ services, chats, contacts }: DashboardItems) => ({ services, chats, contacts })
);
export const searchForNewDashboardItems = createAction(SEARCH_FOR_NEW_DASHBOARD_ITEMS, (querySearch: string) => querySearch);
export const setFoundItemsForDashboard = createAction(
  SET_FOUND_ITEMS_FOR_DASHBOARD,
  (
    { services, chats, contacts }: { services: ServiceState[] | null; chats: ChatState[] | null; contacts: ContactState[] | null }
  ) => ({  services, chats, contacts })
);
export const addItemToDashboard = createAction(
  ADD_ITEM_TO_DASHBOARD, ({ entity, entityType }: { entity: any; entityType: string }) => ({ entity, entityType })
);
export const updateItemsOnDashboard = createAction(
  UPDATE_ITEMS_ON_DASHBOARD, ({ entity, entityType }: { entity: any; entityType: string } ) => ({ entity, entityType })
);
export const removeItemFromDashboard = createAction(
  REMOVE_ITEM_FROM_DASHBOARD, ({ entityId, entityType }: { entityId: string; entityType: string } ) => ({ entityId, entityType })
);
export const changeDashboardItemsOrder = createAction(
  CHANGE_DASHBOARD_ITEMS_ORDER, ({ entityType, entities }: { entityType: string; entities: any[] } ) => ({ entityType, entities })
);
export const openSmartApp = createAction(OPEN_SMART_APP, (appId: string) => appId);
export const openGroupChat = createAction(OPEN_GROUP_CHAT, (groupChatId: string) => groupChatId);
export const openContactCard = createAction(OPEN_CONTACT_CARD, (userHuid: string) => userHuid);

export type setDashboardItemsActionType = ReturnType<typeof setDashboardItems>;
export type searchForNewDashboardItemsActionType = ReturnType<typeof searchForNewDashboardItems>;
export type setFoundItemsForDashboardActionType = ReturnType<typeof setFoundItemsForDashboard>;
export type addItemToDashboardActionType = ReturnType<typeof addItemToDashboard>;
export type updateItemsOnDashboardActionType = ReturnType<typeof updateItemsOnDashboard>;
export type removeItemFromDashboardActionType = ReturnType<typeof removeItemFromDashboard>;
export type changeDashboardItemsOrderActionType = ReturnType<typeof changeDashboardItemsOrder>;
export type openSmartAppActionType = ReturnType<typeof openSmartApp>;
export type openGroupChatActionType = ReturnType<typeof openGroupChat>;
export type openContactCardActionType = ReturnType<typeof openContactCard>;