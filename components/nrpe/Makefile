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
# Copyright (c) 2011, 2016, Oracle and/or its affiliates. All rights reserved.
#
BUILD_BITS= 64
include ../../make-rules/shared-macros.mk

PATH=$(SPRO_VROOT)/bin:$(GNUBIN):$(USRBINDIR)

COMPONENT_NAME=		nrpe
COMPONENT_VERSION=	4.0.3
COMPONENT_MAJOR_VERSION= $(shell echo $(COMPONENT_VERSION) | cut -d. -f1 )
COMPONENT_PROJECT_URL=	http://nrpe.sourceforge.org
COMPONENT_ARCHIVE_HASH= \
    sha256:f907ba15381adfc6eef211508abd027f8e1973116080faa4534a1191211c0340
COMPONENT_ARCHIVE_URL= https://sourceforge.net/projects/nagios/files/nrpe-$(COMPONENT_MAJOR_VERSION).x/nrpe-$(COMPONENT_VERSION)/nrpe-$(COMPONENT_VERSION).tar.gz

IPS_PKG_NAME = application/management/$(COMPONENT_NAME)

TPNO=			99999

include $(WS_MAKE_RULES)/common.mk

studio_C99MODE= $(studio_C99_ENABLE)
SPRO_ROOT = /opt

CONFIGURE_OPTIONS += --enable-command-args
CONFIGURE_OPTIONS += --with-kerberos-inc=/usr/include/kerberosv5
CONFIGURE_OPTIONS += --with-pkgsysconfdir=/etc/nagios
CONFIGURE_OPTIONS += --with-piddir=/var/run
CONFIGURE_OPTIONS += --enable-install-method=os

COMPONENT_BUILD_TARGETS = all

COMPONENT_PREP_ACTION = (cd $(@D) ; autoconf -f)
# for DH key generation to work
COMPONENT_PRE_CONFIGURE_ACTION = (mkdir $(@D)/include )
COMPONENT_POST_CONFIGURE_ACTION = (rm -f $(SOURCE_DIR)/include/dh.h )

install: $(INSTALL_64)

REQUIRED_PACKAGES += library/security/openssl
REQUIRED_PACKAGES += system/network
REQUIRED_PACKAGES += system/core-os
REQUIRED_PACKAGES += system/library/libc

