import React from 'react';
import styled from 'styled-components';
import { Icon } from '@strapi/design-system/Icon';
import { Flex } from '@strapi/design-system/Flex';
import Puzzle from '@strapi/icons/Puzzle';

const PuzleIcon = () => <Puzzle />;
const IconBox = styled(Flex)`
  background-color: #f0f0ff; /* primary100 */
  border: 1px solid #d9d8ff; /* primary200 */
  svg > path {
    fill: #4945ff; /* primary600 */
  }
`;
const FieldIcon = () => {
  return (
    <IconBox justifyContent="center" alignItems="center" width={7} height={6} hasRadius aria-hidden>
      <Icon as={PuzleIcon} />
    </IconBox>
  );
};
export default FieldIcon;
