import React from 'react';
import statsArray from '../helpers/statsArray';
import { AccessTokenContext } from '../helpers/Context';
import { useContext } from 'react';

export default function Tooltip(props) {

  const { accessToken, setAccessToken } = useContext(AccessTokenContext);

  return (
    props.item ?
      <div className='Tooltip'>
        <table>
          <tbody>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>
                          {props.item.name}
                        </b>
                      </td>
                      <th>

                      </th>
                    </tr>
                  </tbody>
                </table>
                <span>
                  <br />
                  Item Level {props.item.level}
                </span>
                <br />
                {props.item.preview_item.binding.name}
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {props.item.inventory_type.name}
                      </td>
                      <th>
                        <span>
                          {props.item.item_subclass.name}
                        </span>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      :
      <div>
        no item
      </div>

  );

}