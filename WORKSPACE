load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

skylib_version = "0.8.0"
http_archive(
    name = "bazel_skylib",
    sha256 = "2ef429f5d7ce7111263289644d233707dba35e39696377ebab8b0bc701f7818e",
    type = "tar.gz",
    url = "https://github.com/bazelbuild/bazel-skylib/releases/download/{}/bazel-skylib.{}.tar.gz".format(skylib_version, skylib_version),
)

http_archive(
    name = "rules_pkg",
    url = "https://github.com/bazelbuild/rules_pkg/releases/download/0.2.4/rules_pkg-0.2.4.tar.gz",
    sha256 = "4ba8f4ab0ff85f2484287ab06c0d871dcb31cc54d439457d28fd4ae14b18450a",
)
load("@rules_pkg//:deps.bzl", "rules_pkg_dependencies")
rules_pkg_dependencies()

http_archive(
    name = "io_bazel_rules_rust",
    sha256 = "f33bffd6b779ae5a4f57944e86307f876872b9dbfc07b3d10d0e7f0041f29d5f",
    strip_prefix = "rules_rust-959ba5692cc4e6b803b20018c9eeeadedaa4b637",
    urls = [
        "https://github.com/bazelbuild/rules_rust/archive/959ba5692cc4e6b803b20018c9eeeadedaa4b637.tar.gz",
    ],
)
load("@io_bazel_rules_rust//rust:repositories.bzl", "rust_repositories")
rust_repositories()
load("@io_bazel_rules_rust//:workspace.bzl", "bazel_version")
bazel_version(name = "bazel_version")
load("//third-party/cargo:crates.bzl", "raze_fetch_remote_crates")
raze_fetch_remote_crates()

rules_kotlin_version = "legacy-1.3.0-rc1"
http_archive(
    name = "io_bazel_rules_kotlin",
    sha256 = "9de078258235ea48021830b1669bbbb678d7c3bdffd3435f4c0817c921a88e42",
    strip_prefix = "rules_kotlin-%s" % rules_kotlin_version,
    type = "zip",
    urls = ["https://github.com/bazelbuild/rules_kotlin/archive/%s.zip" % rules_kotlin_version],
)

RULES_JVM_EXTERNAL_TAG = "2.9"
RULES_JVM_EXTERNAL_SHA = "e5b97a31a3e8feed91636f42e19b11c49487b85e5de2f387c999ea14d77c7f45"
http_archive(
    name = "rules_jvm_external",
    sha256 = RULES_JVM_EXTERNAL_SHA,
    strip_prefix = "rules_jvm_external-%s" % RULES_JVM_EXTERNAL_TAG,
    url = "https://github.com/bazelbuild/rules_jvm_external/archive/%s.zip" % RULES_JVM_EXTERNAL_TAG,
)
load("@rules_jvm_external//:defs.bzl", "maven_install")

maven_install(
    artifacts = [
        "com.fasterxml.jackson.core:jackson-annotations:2.9.8",
        "com.fasterxml.jackson.datatype:jackson-datatype-jdk8:2.9.8",
        "com.fasterxml.jackson.module:jackson-module-kotlin:2.9.8",
        "com.google.inject:guice:4.2.2",
        "com.google.guava:guava:27.1-jre",
        "com.h2database:h2:1.4.199",
        "com.jakewharton.retrofit:retrofit2-reactor-adapter:2.1.0",
        "com.squareup.retrofit2:converter-jackson:2.5.0",
        "com.squareup.retrofit2:retrofit:2.5.0",
        "io.dropwizard:dropwizard-auth:1.3.9",
        "io.dropwizard:dropwizard-core:1.3.9",
        "io.dropwizard:dropwizard-jdbi3:1.3.9",
        "io.dropwizard:dropwizard-logging:1.3.9",
        "io.dropwizard:dropwizard-migrations:1.3.9",
        "io.dropwizard:dropwizard-testing:1.3.9",
        "io.projectreactor:reactor-core:3.2.8.RELEASE",
        "io.projectreactor:reactor-test:3.2.8.RELEASE",
        "io.sentry:sentry-logback:1.7.16",
        "org.assertj:assertj-core:3.12.2",
        "org.jdbi:jdbi3-kotlin-sqlobject:3.8.0",
        "org.mockito:mockito-core:2.27.0",
        "org.reactivestreams:reactive-streams:1.0.2",
    ],
    repositories = [
        "https://jcenter.bintray.com/",
        "https://repo1.maven.org/maven2/",
    ],
)


load("@io_bazel_rules_kotlin//kotlin:kotlin.bzl", "kotlin_repositories", "kt_register_toolchains")

kotlin_repositories()

kt_register_toolchains()

http_archive(
    name = "io_bazel_rules_go",
    urls = [
        "https://storage.googleapis.com/bazel-mirror/github.com/bazelbuild/rules_go/releases/download/v0.20.2/rules_go-v0.20.2.tar.gz",
        "https://github.com/bazelbuild/rules_go/releases/download/v0.20.2/rules_go-v0.20.2.tar.gz",

    ],
    sha256 = "b9aa86ec08a292b97ec4591cf578e020b35f98e12173bbd4a921f84f583aebd9",
)

http_archive(
    name = "bazel_gazelle",
    urls = [
        "https://storage.googleapis.com/bazel-mirror/github.com/bazelbuild/bazel-gazelle/releases/download/v0.19.0/bazel-gazelle-v0.19.0.tar.gz",
        "https://github.com/bazelbuild/bazel-gazelle/releases/download/v0.19.0/bazel-gazelle-v0.19.0.tar.gz",
    ],
    sha256 = "41bff2a0b32b02f20c227d234aa25ef3783998e5453f7eade929704dcff7cd4b",
)

load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")

go_rules_dependencies()

go_register_toolchains()

load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies")

gazelle_dependencies()

# gazelle:repository_macro third-party/go/deps.bzl%go_dependencies
load("//third-party/go:deps.bzl", "go_dependencies")
go_dependencies()

load(
  "//third-party/java:junit.bzl",
  "junit_jupiter_java_repositories",
  "junit_platform_java_repositories")

junit_jupiter_java_repositories()
junit_platform_java_repositories()
