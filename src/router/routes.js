const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "comics", component: () => import("pages/ComicsPage.vue") },
      { path: "sendtomap", component: () => import("pages/SendToMap.vue") },
      { path: "sent", component: () => import("pages/SentPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
