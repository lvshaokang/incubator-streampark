/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export interface AlertSetting {
  id: string;
  userId: string;
  alertName: string;
  alertType: number;
  emailParams: string;
  dingTalkParams: string;
  weComParams: string;
  httpCallbackParams?: any;
  larkParams: string;
  createTime: string;
  modifyTime: string;
}

// Create an alert
export interface AlertCreate {
  id?: any;
  alertName: string;
  userId: string | number;
  alertType: number;
  emailParams: EmailParams;
  dingTalkParams: DingTalkParams;
  weComParams: WeComParams;
  larkParams: LarkParams;
  isJsonType?: boolean;
}

interface LarkParams {
  token: string;
  isAtAll: boolean;
  secretEnable: boolean;
  secretToken: string;
}

interface WeComParams {
  token: string;
}

interface DingTalkParams {
  token?: string;
  contacts?: string;
  alertDingURL?: string;
  secretEnable?: boolean;
  secretToken?: string;
  isAtAll: boolean;
}

interface EmailParams {
  contacts: string;
}
