load("@io_bazel_rules_rust//rust:rust.bzl", "rust_binary", "rust_library", "rust_test")
load("@rules_pkg//:pkg.bzl", "pkg_tar", "pkg_deb")


rust_library(
    name = "lib",
    srcs = [
        "src/cli.rs",
        "src/lib.rs",
    ],
    deps = [
        "//third-party/cargo:clap",
        "//third-party/cargo:regex",
    ],
)

rust_binary(
    name = "mvb",
    srcs = [
        "src/main.rs",
    ],
    deps = [
        ":lib",
        "//third-party/cargo:regex",
        "//third-party/cargo:walkdir",
    ],
)

rust_test(
    name = "mvb_test",
    crate = ":lib",
)

pkg_tar(
    name = "mvb-bin",
    strip_prefix = "/mvb",
    package_dir = "/usr/bin",
    srcs = ["//mvb:mvb"],
    mode = "0755",
)

pkg_tar(
    name = "debian-data",
    extension = "tar.gz",
    deps = [
        ":mvb-bin",
    ],
)

pkg_deb(
    name = "bazel-debian",
    architecture = "amd64",
    data = ":debian-data",
    depends = [],
    description_file = "debian/description",
    homepage = "http://github.com/PtrTeixeira/cookbook",
    maintainer = "Peter Teixeira <PtrTeixeira@gmail.com>",
    package = "mvb",
    version = "0.0.1",
)