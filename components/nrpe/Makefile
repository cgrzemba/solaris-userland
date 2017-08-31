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
COMPONENT_VERSION=	2.15
COMPONENT_PROJECT_URL=	http://nrpe.sourceforge.org
COMPONENT_ARCHIVE_HASH= \
    sha256:66383b7d367de25ba031d37762d83e2b55de010c573009c6f58270b137131072
COMPONENT_ARCHIVE_URL= https://sourceforge.net/projects/nagios/files/nrpe-2.x/nrpe-2.15/nrpe-2.15.tar.gz

IPS_PKG_NAME = application/management/$(COMPONENT_NAME)

TPNO=			99999

include $(WS_MAKE_RULES)/common.mk

studio_C99MODE= $(studio_C99_ENABLE)

CONFIGURE_OPTIONS += --enable-command-args
CONFIGURE_OPTIONS += --with-kerberos-inc=/usr/include/kerberosv5

COMPONENT_PREP_ACTION = (cd $(@D) ; autoconf -f)
# for DH key generation to work
COMPONENT_PRE_CONFIGURE_ACTION = (mkdir $(@D)/include )
COMPONENT_POST_CONFIGURE_ACTION = (rm -f $(SOURCE_DIR)/include/dh.h )
COMPONENT_POST_INSTALL_ACTION = (install -d $(PROTO_DIR)$(VARDIR)/svc/manifest/site ; install $(SOURCE_DIR)/package/solaris/pkg/nrpe.xml $(PROTO_DIR)$(VARDIR)/svc/manifest/site);
COMPONENT_POST_INSTALL_ACTION += (install -d $(PROTOLIBDIR)/methode; install $(SOURCE_DIR)/package/solaris/pkg/nrpe $(PROTOLIBDIR)/methode);
COMPONENT_POST_INSTALL_ACTION += (install -d $(PROTOETCDIR)/nagios; install $(BUILD_DIR_64)/sample-config/nrpe.cfg $(PROTOETCDIR)/nagios);

install: $(INSTALL_64)

REQUIRED_PACKAGES += library/security/openssl
REQUIRED_PACKAGES += system/network
REQUIRED_PACKAGES += system/core-os

