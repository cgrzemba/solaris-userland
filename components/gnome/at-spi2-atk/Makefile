#
# CDDL HEADER START
#
# The contents of this file are subject to the terms of the
# Common Development and Distribution License (the "License").
# You may not use this file except in compliance with the License.
#
# You can obtain a copy of the license at usr/src/OPENSOLARIS.LICENSE
# or http://www.opensolaris.org/os/licensing.
# See the License for the specific language governing permissions
# and limitations under the License.
#
# When distributing Covered Code, include this CDDL HEADER in each
# file and include the License file at usr/src/OPENSOLARIS.LICENSE.
# If applicable, add the following below this CDDL HEADER, with the
# fields enclosed by brackets "[]" replaced with your own identifying
# information: Portions Copyright [yyyy] [name of copyright owner]
#
# CDDL HEADER END
#

#
# Copyright (c) 2015, 2019, Oracle and/or its affiliates. All rights reserved.
#

BUILD_BITS =            32_and_64
COMPILER=		gcc
include ../../../make-rules/shared-macros.mk

COMPONENT_NAME=		at-spi2-atk
COMPONENT_VERSION=	2.34.0
COMPONENT_PROJECT_URL=	https://wiki.gnome.org/Accessibility
COMPONENT_ARCHIVE_HASH=	\
    sha256:3a9a7e96a1eb549529e60a42201dd78ccce413d9c1706e16351cc5288e064500
COMPONENT_BUGDB=        gnome/a11y-libs-core
COMPONENT_ANITYA_ID=	7840

TPNO=			53956
BUILD_STYLE=		meson

# Tests do not work on Solaris yet
TEST_TARGET= $(SKIP_TEST)

include $(WS_MAKE_RULES)/gnome-component.mk

REQUIRED_PACKAGES += developer/documentation-tool/gtk-doc
REQUIRED_PACKAGES += library/desktop/at-spi2-core
REQUIRED_PACKAGES += library/desktop/atk
REQUIRED_PACKAGES += library/glib2
REQUIRED_PACKAGES += library/libxml2
REQUIRED_PACKAGES += library/libxslt
REQUIRED_PACKAGES += library/perl-5/xml-parser-522
REQUIRED_PACKAGES += runtime/perl-522
REQUIRED_PACKAGES += system/library/libdbus
REQUIRED_PACKAGES += x11/library/libx11
REQUIRED_PACKAGES += x11/library/libxext
REQUIRED_PACKAGES += x11/library/libxrender
REQUIRED_PACKAGES += x11/library/libxtst
REQUIRED_PACKAGES += x11/server/xorg
