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

import { ADDON_ID, PARAM_KEY, TOOL_ID } from './constants';

export const Tool = memo(function MyAddonSelector() {
  const [globals, updateGlobals] = useGlobals();
  const api = useStorybookApi();

  const isActive = ![false, 'false'].includes(globals[PARAM_KEY]);

  const togglePreview = useCallback(() => {
    updateGlobals({
      [PARAM_KEY]: !isActive,
    });
  }, [isActive]);

  useEffect(() => {
    api.setAddonShortcut(ADDON_ID, {
      label: 'Testing preview',
      showInMenu: false,
      action: togglePreview,
    });
  }, [togglePreview, api]);

  return (
    <IconButton key={TOOL_ID} active={isActive} title="Toggle testing preview" onClick={togglePreview}>
      <BeakerIcon />
    </IconButton>
  );
});
