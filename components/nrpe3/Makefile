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
COMPONENT_VERSION=	3.2.1
COMPONENT_PROJECT_URL=	http://nrpe.sourceforge.org
COMPONENT_ARCHIVE_HASH= \
    sha256:8ad2d1846ab9011fdd2942b8fc0c99dfad9a97e57f4a3e6e394a4ead99c0f1f0
COMPONENT_ARCHIVE_URL= https://sourceforge.net/projects/nagios/files/nrpe-3.x/nrpe-$(COMPONENT_VERSION)/nrpe-$(COMPONENT_VERSION).tar.gz

IPS_PKG_NAME = application/management/$(COMPONENT_NAME)
COMPONENT_REVISION = 2
NIGHTLYID = $(COMPONENT_REVISION)

TPNO=			99999

SPRO_ROOT = /opt
SPRO_VROOT = /opt/developerstudio12.5

include $(WS_MAKE_RULES)/common.mk
include $(WS_MAKE_RULES)/configure.mk

studio_C99MODE= $(studio_C99_ENABLE)

# CFLAGS += -g -DDEBUG

CONFIGURE_OPTIONS += --enable-install-method=os
# CONFIGURE_OPTIONS += --sysconfdir=/etc
CONFIGURE_OPTIONS += --sbindir=/usr/sbin
CONFIGURE_OPTIONS += --with-piddir=/var/run/nagios
CONFIGURE_OPTIONS += --enable-command-args
# CONFIGURE_OPTIONS += --enable-ssl
# CONFIGURE_OPTIONS += --with-ssl=/usr/bin/openssl
# CONFIGURE_OPTIONS += --with-ssl-inc=/usr/include/openssl
CONFIGURE_OPTIONS += --with-kerberos-inc=/usr/include/kerberosv5

COMPONENT_PREP_ACTION = (cd $(@D) ; autoconf -f)

# for DH key generation to work
COMPONENT_PRE_CONFIGURE_ACTION = (mkdir $(@D)/include )

COMPONENT_POST_CONFIGURE_ACTION = (rm -f $(SOURCE_DIR)/include/dh.h )

COMPONENT_BUILD_TARGETS = all

COMPONENT_POST_INSTALL_ACTION = (install -d $(PROTO_DIR)$(VARDIR)/svc/manifest/site ; install $(@D)/startup/solaris-init.xml $(PROTO_DIR)$(VARDIR)/svc/manifest/site/nrpe.xml);
COMPONENT_POST_INSTALL_ACTION += (install -d $(PROTOETCDIR)/nagios; install $(BUILD_DIR_64)/sample-config/nrpe.cfg $(PROTOETCDIR)/nagios);

build: $(BUILD_64)

install: $(INSTALL_64)

REQUIRED_PACKAGES += library/security/openssl
REQUIRED_PACKAGES += system/network
REQUIRED_PACKAGES += system/core-os
REQUIRED_PACKAGES += system/library/libc

