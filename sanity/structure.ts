// @ts-ignore

export const structure = (S) =>
  S.list()
    .title("Manage your portfolio")
    .items([
      S.listItem()
        .title("Welcome screen")
        .id("welcome")
        .child(S.document().schemaType("welcome").documentId("welcome")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item: { getId: () => string }) =>
          ["project"].includes(item.getId()) ||
          ["page"].includes(item.getId()) /* ||
          ["art_work"].includes(item.getId()) */
      ),
    ]);
