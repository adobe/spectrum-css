/*!
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import React, { memo, useCallback, useEffect } from 'react';

import { IconButton } from '@storybook/components';
import { BeakerIcon } from '@storybook/icons';
import { useGlobals, useStorybookApi } from '@storybook/manager-api';
import { styled } from '@storybook/theming';

import { ADDON_ID, PARAM_KEY, PARAM_TITLE, TOOL_ID } from './constants';
import { useParameters } from './decorators/helpers';

const IconButtonLabel = styled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
  // marginLeft: 10,
}));

export const TestingMode = memo(function TestingPreview() {
  const { showLabel } = useParameters();
  const [globals, updateGlobals] = useGlobals();
  const api = useStorybookApi();

  // This global parameter is used to toggle the preview mode at the story level
  const isActive = ![false, 'false'].includes(globals[PARAM_KEY]);

  const togglePreview = useCallback(() => {
    updateGlobals({
      [PARAM_KEY]: !isActive,
    });
  }, [isActive]);

  useEffect(() => {
    api.setAddonShortcut(ADDON_ID, {
      label: PARAM_TITLE,
      showInMenu: false,
      action: togglePreview,
    });
  }, [togglePreview, api]);

  return (
    <IconButton
      key={TOOL_ID}
      active={isActive}
      title={isActive ? "Turn off testing preview" : "Preview the story in testing mode"}
      onClick={togglePreview}
    >
      <BeakerIcon />
      {showLabel && <IconButtonLabel>{PARAM_TITLE}</IconButtonLabel>}
    </IconButton>
  );
});
