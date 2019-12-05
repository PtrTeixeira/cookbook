"""
cargo-raze crate build file.

DO NOT EDIT! Replaced on runs of cargo-raze
"""
package(default_visibility = [
  # Public for visibility by "@raze__crate__version//" targets.
  #
  # Prefer access through "//third-party/cargo", which limits external
  # visibility to explicit Cargo.toml dependencies.
  "//visibility:public",
])

licenses([
  "notice", # "MIT"
])

load(
    "@io_bazel_rules_rust//rust:rust.bzl",
    "rust_library",
    "rust_binary",
    "rust_test",
)


# Unsupported target "arr" with type "test" omitted

rust_library(
    name = "generic_array",
    crate_root = "src/lib.rs",
    crate_type = "lib",
    edition = "2015",
    srcs = glob(["**/*.rs"]),
    deps = [
        "@raze__typenum__1_11_2//:typenum",
    ],
    rustc_flags = [
        "--cap-lints=allow",
    ],
    version = "0.12.3",
    crate_features = [
    ],
)

# Unsupported target "generics" with type "test" omitted
# Unsupported target "hex" with type "test" omitted
# Unsupported target "import_name" with type "test" omitted
# Unsupported target "iter" with type "test" omitted
# Unsupported target "mod" with type "test" omitted