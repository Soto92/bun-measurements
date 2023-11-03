declare module "*/math.c" {
	const symbols: import("bun:ffi").ConvertFns<typeof import("./config.ts").default.symbols>;
	export = symbols;
}