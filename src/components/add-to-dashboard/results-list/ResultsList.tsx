import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { ReactComponent as Service } from '../../../assets/icons/service.svg';
import { ReactComponent as Corporate } from '../../../assets/icons/corporate.svg';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import { ReactComponent as Delete } from '../../../assets/icons/delete.svg';
import { addItemToDashboard, removeItemFromDashboard } from '../../../redux/actions/dashboard';
import { SECTION_TYPE } from '../../../constants/constants';
import { DashboardItem } from '../../../types/types';
import { getInitials } from '../../../helpers';
import './ResultsList.scss';

interface ResultsListProps {
  type: string;
  items: DashboardItem[];
}

const ResultsList = ({ type, items }: ResultsListProps) => {
  const dispatch = useDispatch();

  return (
    <div className="results-list">
      {items.map(item => (
        <div key={item.id} className="results-list__item">
          {item.avatar ? (
            <img src={item.avatar} alt="" />
          ) : (
            type === SECTION_TYPE.services ? <Service /> : <div className='avatar avatar__small'>{getInitials(item.name)[0]}</div>
          )}
          {type === SECTION_TYPE.services ? (
            <div className="results-list__item--name">{item.name}</div>
          ) : (
            <div
              className={
                classNames({
                  'results-list__item--common-info': true,
                  'results-list__item--centered-info': type === SECTION_TYPE.chats,
                })
              }
            >
              <Corporate />
              <div>
                <div className="results-list__item--name">{item.name}</div>
                {type === SECTION_TYPE.contacts && (
                  <div className="results-list__item--description">{item.description}</div>
                )}
              </div>
            </div>
          )}
          {item.isAlreadyAdded ? (
            <Delete onClick={() => dispatch(removeItemFromDashboard({ entityId: item.id, entityType: type }))} />
          ) : (
            <Plus onClick={() => dispatch(addItemToDashboard({ entity: item, entityType: type }))} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ResultsList;