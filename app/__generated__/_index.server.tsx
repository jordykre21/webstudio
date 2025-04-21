/* eslint-disable */
/* This is a auto generated file for building the project */

import type { PageMeta } from "@webstudio-is/sdk";
import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const _data = new Map<string, ResourceRequest>([]);
  const _action = new Map<string, ResourceRequest>([]);
  return { data: _data, action: _action };
};

export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "Wie zijn wij | Plattelands Jongeren Euro‑Delta Putten",
    description:
      "Ontdek Plattelands Jongeren Euro‑Delta Putten: een actieve jongerenvereniging voor algemeen en agrarisch werk in Putten. Word lid en ervaar de landelijke sfeer!",
    excludePageFromSearch: undefined,
    language: undefined,
    socialImageAssetName: "_JKR0400-Enhanced-NR_A9z84_YSAIlvQyEu0uMRs.jpg",
    socialImageUrl: undefined,
    status: undefined,
    redirect: undefined,
    custom: [],
  };
};

type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params;
};

export const contactEmail = "hello@webstudio.is";
