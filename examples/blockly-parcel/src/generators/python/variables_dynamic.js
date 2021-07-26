/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating Python for dynamic variable blocks.
 * @author fenichel@google.com (Rachel Fenichel)
 */
'use strict';

import * as src from '../python';
import * as src_variables from '../python/variables';

Blockly.Python = src.Blockly.Python;



// Python is dynamically typed.
Blockly.Python['variables_get_dynamic'] = Blockly.Python['variables_get'];
Blockly.Python['variables_set_dynamic'] = Blockly.Python['variables_set'];

export { Blockly };
